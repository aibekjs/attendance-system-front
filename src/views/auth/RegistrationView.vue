<template>
    <div>
      <div class="w-full lg:w-7" style="margin: 0 auto;">
        <div class="text-center text-7xl p-3">
          <font-awesome-icon :icon="['fas', 'graduation-cap']" style="color: #000000;" />
        </div>
        <div class="surface-300 px-8 py-3 border-round-3xl">
          <div class="text-center py-4">
            <primary-button :button-text="btnRegistrationLabel"></primary-button>
          </div>
          <div class="lg:flex justify-content-between">
            <div class="lg:w-5">
                <label for="email" class="block text-900 font-bold ml-3 mb-2">Email</label>
                <input type="text" id="email" class="w-full mb-3 py-2 pl-3 outline-none border-0 border-round-3xl">
            </div>
            <div class="lg:w-5">
                <label for="password" class="block text-900 font-bold ml-3 mb-2">Password</label>
                <input type="text" id="password" class="w-full mb-3 py-2 pl-3 outline-none border-0 border-round-3xl">
            </div>
          </div>
          
          <hr class="mt-3">
  
          <div class="flex justify-content-between my-3">
            <div>
              <primary-button :button-text="btnRegisterLabel" :button-bg-color="btnActive"></primary-button>
            </div>
            <div>
              <router-link :to="{ name: 'login' }" class="no-underline">
                <primary-button :button-text="btnLoginLabel">
                </primary-button>
              </router-link>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PrimaryButton from "@/components/PrimaryButton.vue";
  export default {
    components: {
      PrimaryButton,
    },
    data() {
      return {
        btnRegistrationLabel: "Registration",
        btnLoginLabel: "Login",
        btnRegisterLabel: "Register",
        btnActive: "#1976d2" 
      };
    },
  };
  </script>
  