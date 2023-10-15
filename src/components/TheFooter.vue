<template>
    
<div class="px-8 py-4" style="background-color: black;">
    <div class="border-bottom-1 border-300 text-center">
        <div class="text-white"><font-awesome-icon :icon="['fas', 'square-check']" class="text-red-700 text-3xl" /> Attendance</div>
        <ul class="list-none p-0 mx-0 my-5 flex justify-content-center flex-column align-items-center lg:flex-row">
            <li><a class="text-white text-600 cursor-pointer line-height-3 lg:mr-5">My attendance</a></li>
            <li><a class="text-white text-600 cursor-pointer line-height-3 lg:mr-5">Info</a></li>
            <li><a class="text-white text-600 cursor-pointer line-height-3 lg:mr-5">Login</a></li>
        </ul>
        </div>
        <div class="flex align-items-center justify-content-center mt-5">
            <a class="cursor-pointer border-circle bg-red-700 text-bluegray-500 block inline-flex justify-content-center align-items-center mr-5" style="width:2.5rem; height: 2.5rem">
                <font-awesome-icon :icon="['fab', 'telegram']" style="color: #ffffff;" />
            </a>
            <a class="cursor-pointer border-circle bg-red-700 text-bluegray-500 block inline-flex justify-content-center align-items-center mr-5" style="width:2.5rem; height: 2.5rem">
                <font-awesome-icon :icon="['fab', 'whatsapp']" style="color: #ffffff;" />
            </a>
            <a class="cursor-pointer border-circle bg-red-700 text-bluegray-500 block inline-flex justify-content-center align-items-center" style="width:2.5rem; height: 2.5rem">
                <font-awesome-icon :icon="['fab', 'instagram']" style="color: #ffffff;" />
            </a>
        </div>
    
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
