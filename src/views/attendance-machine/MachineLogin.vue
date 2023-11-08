<template> 
    <div class="px-4 md:px-6 lg:px-8" style="margin-top: 150px;"> 
        <div class="grid"> 
            <router-link :to="{ name: 'byid' }" class="col-12 md:col-6 lg:col-4 no-underline">
                <machine-login-card :icon="icon1" :text="text1" />
            </router-link>
            <router-link :to="{ name: 'bycode' }" class="col-12 md:col-6 lg:col-4 no-underline">
                <machine-login-card :icon="icon2" :text="text2" />
            </router-link>
            <router-link :to="{ name: 'anotheroption' }" class="col-12 md:col-6 lg:col-4 no-underline">
                <machine-login-card :icon="icon3" :text="text3" />
            </router-link>
        </div> 
    </div> 
</template> 

<script>
    import MachineLoginCard from "@/components/MachineLoginCard"
    export default {
        components: {
            MachineLoginCard,
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
