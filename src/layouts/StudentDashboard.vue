<template>
<div class="min-h-screen flex fixed lg:static bg-pink-200">
    <div id="app-sidebar-2" class="bg-red-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none" style="width:280px">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center px-5 flex-shrink-0" style="height:60px">
                <h3 class="text-white font-bold">Attendance system</h3>
            </div>
            <div class="overflow-y-auto bg-white h-full" style="width: 250px;">
                <ul class="list-none p-3 m-0">
                    <li>
                        <router-link :to="{ path: '/student-dashboard/my-attendance-report' }" class="no-underline">
                            <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-red-900 border-round text-900 hover:text-white
                                transition-duration-150 transition-colors p-ripple">
                                <span class="text-center" style="width: 30px;">
                                    <font-awesome-icon :icon="['fas', 'clipboard-user']" size="xl" />
                                </span>
                                <span class="font-bold">My attendance</span>
                            </a>
                        </router-link>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-red-900 border-round text-900 hover:text-white
                            transition-duration-150 transition-colors p-ripple">
                            <span class="text-center" style="width: 30px;">
                                <font-awesome-icon :icon="['fas', 'user-group']" />
                            </span>
                            <span class="font-bold">Friends</span>
                        </a>
                    </li>
                    <li>
                        <router-link :to="{ path: '/' }" class="no-underline">
                            <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-red-900 border-round text-900 hover:text-white
                                transition-duration-150 transition-colors p-ripple">
                                <span class="text-center" style="width: 30px;">
                                    <font-awesome-icon :icon="['fas', 'right-from-bracket']" size="xl" />
                                </span>
                                <span class="font-bold">Logout</span>
                            </a>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="mt-auto bg-white" style="width: 250px;">
                <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                <div class="m-3 flex align-items-center p-2">
                    <img :src="username[0].photo" class="mr-2 border-circle" style="width: 30px; height: 30px"/>
                    <span class="font-medium text-700">{{ username[0].name }}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 relative lg:static" style="height:60px">
            <div class="flex">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                    v-styleclass="{ selector: '#app-sidebar-2', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true}">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
            </div>
        </div>
        <router-view />
    </div>
</div>
</template>

<script setup>
import { ref } from "vue";

const username = ref([ 
    {photo: 'https://frankfurt.apollo.olxcdn.com/v1/files/r3xsf4z97vnv3-KZ/image;s=1080x1071', name: 'Maratuly Kadyr'},
]);
</script>