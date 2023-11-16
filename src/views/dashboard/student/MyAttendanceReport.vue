<template>
    <div class="px-4">
        <div class="surface-card border-round border-round-3xl p-4" style="min-height: 9rem">
            <div class="text-center font-bold">Attendance Report</div>
            <div class="bg-black-alpha-90 my-3" style="min-height: 0.5rem"></div>
            <div class="card flex justify-content-between">
                <Dropdown v-model="selectedYear" :options="years" optionLabel="year" placeholder="Year and Term" class="w-full md:w-17rem" />
                <Dropdown v-model="selectedCourse" :options="courses" optionLabel="coursename" placeholder="Coursename" class="w-full md:w-17rem" />
                <Dropdown v-model="selectedMonth" :options="months" optionLabel="month" placeholder="Month" class="w-full md:w-17rem" />
                <Button type="button" label="Show" severity="danger" class="w-full md:w-17rem bg-red-700" />
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
            <div class="grid">
                <div class="col-12 md:col-6">
                    <div class="font-bold text-2xl text-center">Lecture</div>
                    <div class="bg-pink-300 border-round border-round-3xl m-4 p-4">
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th class="bg-yellow-500">Coursename</th>
                                    <th class="bg-yellow-500" v-for="(item, index) in lecture[0].report" :key="index">
                                        {{ item.day }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="coursename in lecture" :key="coursename.id">
                                    <td class="pl-2">{{ coursename.coursename }}</td>
                                    <td v-for="reportItem in coursename.report" :key="reportItem.day" :class="getBackgroundColorClass(reportItem.type)" style="width: 45px; height: 45px"></td>
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
                                    <th class="bg-red-500" v-for="(item, index) in practice[0].report" :key="index">
                                        {{ item.day }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="coursename in practice" :key="coursename.id">
                                    <td class="pl-2">{{ coursename.coursename }}</td>
                                    <td v-for="reportItem in coursename.report" :key="reportItem.day"  :class="getBackgroundColorClass(reportItem.type)" style="width: 45px; height: 45px"></td>
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
import { ref } from "vue";

const selectedCourse = ref();
const courses = ref([ 
    {coursename: 'History and philosophy of science'},
    {coursename: 'High School of Pedagogy'},
    {coursename: 'Research Methodology'},
    {coursename: 'Software Development Management and Reengineering'},
    {coursename: 'Advanced Programming'},
    {coursename: 'Theory and Technology of Blockchain'},
    {coursename: 'Geographic Information Systems'},
]);

const selectedYear = ref();
const years = ref([ 
    {year: '2023. Term 1'},
    {year: '2023. Term 2'},
    {year: '2024. Term 1'},
    {year: '2024. Term 2'},
]);

const selectedMonth = ref();
const months = ref([ 
    {month: 'January'},
    {month: 'February'},
    {month: 'March'},
    {month: 'April'},
    {month: 'May'},
    {month: 'June'},
    {month: 'July'},
    {month: 'August'},
    {month: 'September'},
    {month: 'October'},
    {month: 'November'},
    {month: 'December'},
]);

const lecture = ref([ 
    {
        coursename: 'History and philosophy of science', 
        report: [
            { day: 2, type: 'absent' }, 
            { day: 9, type: 'card' },
            { day: 16, type: 'card' },
            { day: 21, type: 'friend' },
            { day: 28, type: 'code' }
        ]
    },
]);

const practice = ref([ 
    {
        coursename: 'History and philosophy of science', 
        report: [
            { day: 2, type: 'card' }, 
            { day: 9, type: 'card' },
            { day: 16, type: 'absent' },
            { day: 21, type: 'card' },
            { day: 28, type: 'card' },
        ]
    },
]);

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