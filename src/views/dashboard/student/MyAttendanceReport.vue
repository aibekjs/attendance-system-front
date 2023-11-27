<template>
  <div class="px-4">
      <div class="surface-card border-round border-round-3xl p-4" style="min-height: 9rem">
          <div class="text-center font-bold">Attendance Report</div>
          <div class="bg-black-alpha-90 my-3" style="min-height: 0.5rem"></div>
          <div class="card flex justify-content-between">
              <div class="flex flex-column">
                  <label for="year" class="font-bold mb-1">Year</label>
                  <select v-model="selectedYear"  class="w-full md:w-17rem p-2 bg-pink-300 border-0 outline-none text-lg cursor-pointer">
                      <option class="text-lg" v-for="year in uniqueYears" :key="year" :value="year">{{ year }}</option>
                  </select>
              </div>
              <div class="flex flex-column">
                  <label for="month" class="font-bold mb-1">Month</label>
                  <select v-model="selectedMonth"  class="w-full md:w-17rem p-2 bg-pink-300 border-0 outline-none text-lg cursor-pointer">
                      <option class="text-lg" v-for="month in months" :key="month.value" :value="month.value">{{ month.label }}</option>
                  </select>
              </div>
              <div class="flex flex-column">
                  <label for="course" class="font-bold mb-1">Course</label>
                  <select v-model="selectedCourse"  class="w-full md:w-17rem p-2 bg-pink-300 border-0 outline-none text-lg cursor-pointer">
                      <option class="text-lg" v-for="course in uniqueCourses" :key="course" :value="course">{{ course }}</option>
                  </select>
              </div>
          </div>
      </div>
  </div>
  <div class="p-4">
      <div class="surface-card border-round border-round-3xl p-4">
          <div class="bg-pink-300 w-4 m-auto p-2 flex justify-content-between">
              <div class="flex align-items-center">
                  <div class="bg-red-700" style="width: 25px; height: 25px"></div> 
                  <div class="font-bold ml-1">Card</div>
              </div>
              <div class="flex align-items-center">
                  <div class="bg-blue-700" style="width: 25px; height: 25px"></div> 
                  <div class="font-bold ml-1">Code</div>
              </div>
              <div class="flex align-items-center">
                  <div class="bg-yellow" style="width: 25px; height: 25px"></div> 
                  <div class="font-bold ml-1">Friend</div>
              </div>
              <div class="flex align-items-center">
                  <div class="bg-black-alpha-90" style="width: 25px; height: 25px"></div> 
                  <div class="font-bold ml-1">Absent</div>
              </div>
          </div>
          <div class="bg-black-alpha-90 my-3" style="min-height: 0.5rem"></div>
          <div  class="grid">
              <div class="col-12">
                <div class="font-bold text-2xl mb-3">Lecture</div>
                <table class="w-full">
                    <thead>
                        <tr>
                        <th>Course</th>
                        <th v-for="day in getDaysInMonth(selectedYear, selectedMonth)" :key="day">
                            {{ day }}
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pl-2"> {{ filteredLectures.length > 0 ? filteredLectures[0].course.name : 'Course' }} </td>
                            <td v-for="day in getDaysInMonth(selectedYear, selectedMonth)" :key="day" :class="getBackgroundColorClassForDate(day, filteredLectures)" style="width: 30px; height: 30px"></td>
                        </tr>
                    </tbody>
                </table>
              </div>
              <div class="col-12">
                <div class="font-bold text-2xl mb-3">Practice</div>
                <table class="w-full">
                    <thead>
                        <tr>
                        <th>Course</th>
                        <th v-for="day in getDaysInMonth(selectedYear, selectedMonth)" :key="day">
                            {{ day }}
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pl-2"> {{ filteredPractices.length > 0 ? filteredPractices[0].course.name : 'Course' }} </td>
                            <td v-for="day in getDaysInMonth(selectedYear, selectedMonth)" :key="day" :class="getBackgroundColorClassForDate(day, filteredPractices)" style="width: 30px; height: 30px"></td>
                        </tr>
                    </tbody>
                </table>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const table = ref([]);
/*
// Import local data
import localData from '@/data.json';

// Set the local data to the table
table.value = localData;
*/

const fetchTable = async () => {
  try {
    // Fetch data based on selected filters
    const response = await axios.get("http://attendancesystemback-env.eba-nmg2muhp.us-east-1.elasticbeanstalk.com/api/getAttendanceForStudent");
    console.log(response);
    // Update the table with the fetched data
    table.value = response.data;
  } catch (e) {
    alert('Error');
  }
};

onMounted(() => {
    fetchTable();
});

const selectedYear = ref(null);
const selectedMonth = ref(null);
const selectedCourse = ref(null);

const filteredLectures = computed(() => {
return table.value.filter((cell) => {
  return (
    (!selectedYear.value || new Date(cell.date).getFullYear() == selectedYear.value) &&
    (!selectedMonth.value || new Date(cell.date).getMonth() + 1 == selectedMonth.value) &&
    (!selectedCourse.value || cell.course.name == selectedCourse.value) &&
    cell.lesson_type === 1
  );
});
});

const filteredPractices = computed(() => {
return table.value.filter((cell) => {
  return (
    (!selectedYear.value || new Date(cell.date).getFullYear() == selectedYear.value) &&
    (!selectedMonth.value || new Date(cell.date).getMonth() + 1 == selectedMonth.value) &&
    (!selectedCourse.value || cell.course.name == selectedCourse.value) &&
    cell.lesson_type !== 1
  );
});
});

const uniqueYears = computed(() => {
return Array.from(new Set(table.value.map((cell) => new Date(cell.date).getFullYear())));
});

const months = computed(() => [
{ label: 'January', value: 1 },
{ label: 'February', value: 2 },
{ label: 'March', value: 3 },
{ label: 'April', value: 4 },
{ label: 'May', value: 5 },
{ label: 'June', value: 6 },
{ label: 'July', value: 7 },
{ label: 'August', value: 8 },
{ label: 'September', value: 9 },
{ label: 'October', value: 10 },
{ label: 'November', value: 11 },
{ label: 'December', value: 12 },
]);

const uniqueCourses = computed(() => {
return Array.from(new Set(table.value.map((cell) => cell.course.name)));
});

const getDaysInMonth = (year, month) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

const getBackgroundColorClass = (type) => {
    switch (type) {
    case 'card':
        return 'bg-red-700';
    case 'code':
        return 'bg-blue-700';
    case 'friend':
        return 'bg-yellow';
    case 'absent':
        return 'bg-black-alpha-90';
    default:
        return '';
    }
};

const getBackgroundColorClassForDate = (day, filteredData) => {const dataForDay = filteredData.find((cell) => {
    const cellDay = new Date(cell.date).getDate();
    return cellDay === day;
  });

  return dataForDay ? getBackgroundColorClass(dataForDay.type) : '';
};
</script>

<style>
.bg-yellow {
    background: #FFF500E8;
}
</style>