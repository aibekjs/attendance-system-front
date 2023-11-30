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
                <select v-model="selectedCourse" class="w-full md:w-17rem p-2 bg-pink-300 border-0 outline-none text-lg cursor-pointer">  
                  <option class="text-lg" v-for="course in uniqueCourses" :key="course" :value="course">{{ course }}</option>  
                </select>  
              </div>  
              <div class="flex flex-column">  
                <label for="course" class="font-bold mb-1">Group</label>  
                <select v-model="selectedGroup" class="w-full md:w-17rem p-2 bg-pink-300 border-0 outline-none text-lg cursor-pointer">  
                  <option class="text-lg" v-for="group in uniqueGroups" :key="group" :value="group">{{ group }}</option>  
                </select>  
              </div>  
            </div> 
        </div> 
    </div> 
    <div class="p-4"> 
        <div class="surface-card border-round border-round-3xl p-4"> 
            <div class="bg-pink-300 w-4 m-auto p-2 flex justify-content-between"> 
              <div class="flex align-items-center"> 
                  <div class="bg-red-600" style="width: 25px; height: 25px"></div>  
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
            <div class="grid" v-if="selectedYear !== null && selectedMonth !== null && selectedCourse !== null"> 
                <div class="col-12"> 
                    <div class="font-bold text-2xl mb-3">Lecture</div> 
                    <table class="w-full"> 
                        <thead> 
                          <tr> 
                              <th>Student</th> 
                              <th v-for="day in getDaysInMonth(selectedYear, selectedMonth)"   :class="{ 'bg-pink-300': isWeekend(day) }" :key="day">  
                                {{ day }}  
                              </th> 
                          </tr> 
                        </thead> 
                        <tbody>
                          <tr v-for="studentsLectures in filteredLectures" :key="studentsLectures[0]?.users.name"> 
                            <td class="pl-2">{{ studentsLectures[0]?.users ? studentsLectures[0].users.name : 'N/A' }}</td> 
                            <td v-for="day in getDaysInMonth(selectedYear, selectedMonth)" :key="day" :class="getBackgroundColorClassForDate(day, studentsLectures)" style="width: 30px; height: 30px"></td> 
                          </tr>                      
                        </tbody> 
                    </table> 
                </div> 
                <div class="col-12"> 
                    <div class="font-bold text-2xl mb-3">Practice</div> 
                    <table class="w-full"> 
                        <thead> 
                          <tr> 
                            <th>Student</th> 
                            <th v-for="day in getDaysInMonth(selectedYear, selectedMonth)"   :class="{ 'bg-pink-300': isWeekend(day) }" :key="day">  
                              {{ day }}  
                            </th> 
                          </tr> 
                        </thead> 
                        <tbody> 
                          <tr v-for="studentsPractices in filteredPractices" :key="studentsPractices[0]?.users.name"> 
                            <td class="pl-2">{{ studentsPractices[0]?.users ? studentsPractices[0].users.name : 'N/A' }}</td> 
                            <td v-for="day in getDaysInMonth(selectedYear, selectedMonth)" :key="day" :class="getBackgroundColorClassForDate(day, studentsPractices)" style="width: 30px; height: 30px"></td> 
                          </tr>                    
                        </tbody> 
                    </table> 
                </div> 
            </div> 
        </div> 
    </div> 
</template> 
 
<script setup> 
import { ref, computed, onMounted,watchEffect } from 'vue'; 
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
    const response = await axios.get("http://attendancesystemback-env.eba-nmg2muhp.us-east-1.elasticbeanstalk.com/api/getAttendanceForTeacher/", { 
      params: { 
        year: selectedYear.value, 
        month: selectedMonth.value, 
        course: selectedCourse.value, 
        group: selectedGroup.value, 
      }, 
    }); 
    // Update the table with the fetched data 
    console.log(response.data) 
    table.value = response.data; 
  } catch (e) { 
    alert('Error'); 
  } 
}; 
 
onMounted(() => {  
    fetchTable();  
});  
 
/* 
onMounted(async () => { 
  try { 
    const response = await axios.get("http://172.16.4.46:8000/api/getAttendanceForTeacher/"); 
    console.log(response); 
    table.value = response.data; 
  } catch (e) { 
    alert('Error'); 
  } 
}); 
*/ 
const selectedYear = ref(null); 
const selectedMonth = ref(null); 
const selectedCourse = ref(null); // Initialize with an empty string 
const selectedGroup = ref(''); // Initialize with an empty string 
const filteredLectures = computed(() => { 
  const uniqueStudents = Array.from(new Set(table.value.map((cell) => cell.users.name))); 
 
  return uniqueStudents.map((studentName) => { 
    const studentEntries = table.value.filter((cell) =>  
      cell.users.name === studentName && 
      (!selectedCourse.value || cell.course.name === selectedCourse.value) &&   
      (!selectedGroup.value || cell.users.group_id === selectedGroup.value) &&   
      cell.lesson_type === 1 && 
      isEntryInSelectedMonth(cell.date) // New condition for month filtering 
    );

return studentEntries.length > 0 ? studentEntries : null; 
  }).filter(Boolean); 
}); 
 
const filteredPractices = computed(() => { 
  const uniqueStudents = Array.from(new Set(table.value.map((cell) => cell.users.name))); 
 
  return uniqueStudents.map((studentName) => { 
    const studentEntries = table.value.filter((cell) =>  
      cell.users.name === studentName && 
      (!selectedCourse.value || cell.course.name === selectedCourse.value) &&   
      (!selectedGroup.value || cell.users.group_id === selectedGroup.value) &&   
      cell.lesson_type !== 1 && 
      isEntryInSelectedMonth(cell.date) // New condition for month filtering 
    );  
    return studentEntries.length > 0 ? studentEntries : null; 
  }).filter(Boolean); 
}); 
 
// New function to check if the entry is in the selected month 
const isEntryInSelectedMonth = (entryDate) => { 
  const entryMonth = new Date(entryDate).getMonth() + 1; // Months are zero-based 
  return entryMonth === selectedMonth.value; 
}; 
watchEffect(() => { 
  fetchTable(); // Refetch the data from the server based on new filters 
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
 
const uniqueGroups = computed(() => { 
return Array.from(new Set(table.value.map((cell) => cell.users.group_id))); 
}); 
 
const uniqueYears = computed(() => {  
return Array.from(new Set(table.value.map((cell) => new Date(cell.date).getFullYear())));  
});  
 
const getBackgroundColorClass = (type) => { 
switch (type) { 
  case 'card': 
    return 'bg-red-600'; 
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
 
const isWeekend = (day) => { 
  const date = new Date(selectedYear.value, selectedMonth.value - 1, day); 
  console.log('Date Object:', date); // Log the date object 
  const dayOfWeek = date.getDay();  
  return dayOfWeek === 0 || dayOfWeek === 6;  
};  
 
const getDaysInMonth = (year, month) => { 
  const daysInMonth = new Date(year, month, 0).getDate(); 
  return Array.from({ length: daysInMonth }, (_, i) => { 
    const day = i + 1; 
    return day < 10 ? '0' + day : '' + day; 
  }); 
}; 
 
const getBackgroundColorClassForDate = (day, filteredData) => { 
  console.log('Filtered Data:', filteredData);  
  const dataForDay = filteredData.find((cell) => { 
    const cellDay = new Date(cell.date).getDate(); 
    return cellDay === parseInt(day); // Ensure the day is an integer 
  }); 
  if (isWeekend(day)) {  
    return 'bg-pink-300'; // Apply red background for weekends  
  }  
   
  return dataForDay && dataForDay.users ? getBackgroundColorClass(dataForDay.type) : ''; 
 
  // Rest of the function remains unchanged... 
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
.bg-yellow { 
  background: #FFF500E8; 
} 
</style>
