<template> 
    <div class="app-layout bg-pink-200 px-4 py-5 md:px-6 lg:px-8 lg:py-8"> 
        <div class="grid"> 
            <login-method :icon="icon1" :text="text1" />
            <login-method :icon="icon2" :text="text2" />
            <login-method :icon="icon3" :text="text3" />
        </div> 
    </div> 
</template> 

<script>
    import LoginMethod from "../components/LoginMethod.vue";
    export default {
        components: {
            LoginMethod,
        },
        data() {
            return {
            icon1: ['fas', 'address-card'],
            text1: "By card",
            icon2: ['fas', 'lock-open'],
            text2: "By code",
            icon3: ['fas', 'gear'],
            text3: "Another Option",
            };
        },
    };
</script>

   
<style> 
.app-layout { 
display: flex; 
flex-direction: column; 
min-height: 100vh;  
} 
</style>