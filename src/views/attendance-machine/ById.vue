<template> 
    <div class="w-full lg:w-8 text-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"> 
        <div class="grid">
        <div class="col-12 lg:col-3">
            <router-link :to="{ name: 'successpage' }">
                <img :src="require('@/assets/machine-login.png')" alt="login" class="w-full">
            </router-link>
        </div>
        <div class="col-12 lg:col-6 py-5">
            <input type="text" placeholder="ID" class="w-full mt-3 py-3 pl-3 outline-none border-0 border-round-3xl"> 
        </div>
        <div class="col-12 lg:col-3">
            <router-link :to="{ name: 'machinelogin' }">
                <img :src="require('@/assets/machine-back.png')" alt="back" class="w-full">
            </router-link>
        </div>
        </div>
    </div> 
</template> 