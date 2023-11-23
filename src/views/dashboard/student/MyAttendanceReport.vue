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
              <Button @click="showTable" type="button" label="Show" severity="danger" class="w-full md:w-17rem bg-red-700" />
          </div>
      </div>
  </div>
  <div class="p-4">
      <div class="surface-card border-round border-round-3xl p-4">
          <div class="bg-pink-300 w-4 m-auto p-2 flex justify-content-between">
              <div class="flex align-items-center">
                  <div class="bg-green-700" style="width: 25px; height: 25px"></div> 
                  <div class="font-bold ml-1">Card</div>
              </div>
              <div class="flex align-items-center">
                  <div class="bg-blue-700" style="width: 25px; height: 25px"></div> 
                  <div class="font-bold ml-1">Code</div>
              </div>
              <div class="flex align-items-center">
                  <div class="bg-pink-700" style="width: 25px; height: 25px"></div> 
                  <div class="font-bold ml-1">Friend</div>
              </div>
              <div class="flex align-items-center">
                  <div class="bg-black-alpha-90" style="width: 25px; height: 25px"></div> 
                  <div class="font-bold ml-1">Absent</div>
              </div>
          </div>
          <div class="bg-black-alpha-90 my-3" style="min-height: 0.5rem"></div>
          <div v-if="selectedYear !== null && selectedMonth !== null && selectedCourse !== null" class="grid">
              <div class="col-12 md:col-6">
                  <div class="font-bold text-2xl text-center">Lecture</div>
                  <div class="bg-pink-300 border-round border-round-3xl m-4 p-4">
                      <table class="w-full">
                          <thead>
                              <tr>
                                  <th class="bg-yellow-500">Coursename</th>
                                  <th class="bg-yellow-500" v-for="cell in filteredLectures"  :key="cell.id">
                                      <p v-if="cell.date[8] === '0'">{{ cell.date[9] }}</p>
                                      <p v-else>{{ cell.date[8] + cell.date[9] }}</p>
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td class="pl-2"> {{ filteredLectures.length > 0 ? filteredLectures[0].course.name : 'Course' }} </td>
                                  <td v-for="cell in filteredLectures" :key="cell.id" :class="getBackgroundColorClass(cell.type)" style="width: 45px; height: 45px"></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
              <div class="col-12 md:col-6">
                  <div class="font-bold text-2xl text-center">Practice</div>
                  <div class="bg-pink-300 border-round border-round-3xl m-4 p-4">
                      <table class="w-full">
                          <thead>
                              <tr>
                                  <th class="bg-red-500">Coursename</th>
                                  <th class="bg-red-500" v-for="cell in filteredPractices"  :key="cell.id">
                                      <p v-if="cell.date[8] === '0'">{{ cell.date[9] }}</p>
                                      <p v-else>{{ cell.date[8] + cell.date[9] }}</p>
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td class="pl-2"> {{ filteredPractices.length > 0 ? filteredPractices[0].course.name : 'Course' }} </td>
                                  <td v-for="cell in filteredPractices" :key="cell.id"  :class="getBackgroundColorClass(cell.type)" style="width: 45px; height: 45px"></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
          <div class="w-full text-center">
              <Button type="button" label="Download" icon="pi pi-download" severity="help" class="bg-pink-300 text-900" />
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

const table = ref([]);
/*
// Import local data
import localData from '@/data.json';

// Set the local data to the table
table.value = localData;
*/

const showTable = async () => {
  try {
    // Fetch data based on selected filters
    const response = await axios.get("http://172.16.4.46:8000/api/getAttendanceForStudent/");
    console.log(response);
    // Update the table with the fetched data
    table.value = response.data;
  } catch (e) {
    alert('Error');
  }
};


const selectedYear = ref(null);
const selectedMonth = ref(13);
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

const getBackgroundColorClass = (type) => {
switch (type) {
  case 'card':
    return 'bg-green-700';
  case 'code':
    return 'bg-blue-700';
  case 'friend':
    return 'bg-pink-700';
  case 'absent':
    return 'bg-black-alpha-90';
  default:
    return '';
}
};
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
.color-box {
width: 25px;
height: 25px;
margin: 0 auto;
}
</style>