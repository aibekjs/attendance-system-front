<template>
    <div>
      <div class="w-full lg:w-5" style="margin: 0 auto;">
        <div class="text-center text-7xl p-3">
          <font-awesome-icon :icon="['fas', 'graduation-cap']" style="color: #000000;" />
        </div>
        <div class="surface-900 text-center py-4">
          <primary-button :button-text="btnWelcomeLabel"></primary-button>
        </div>
        <div class="surface-300 px-8 py-3 border-round-bottom-3xl">
          <label for="email" class="block text-900 font-bold ml-3 mb-1">Email</label>
          <input type="text" id="email" class="w-full mb-3 py-2 pl-3 outline-none border-0 border-round-3xl">
          
          <label for="password" class="block text-900 font-bold ml-3 mb-1">Password</label>
          <input type="text" id="password" class="w-full mb-3 py-2 pl-3 outline-none border-0 border-round-3xl">

          <input type="text" placeholder="Enter the code" class="w-full mb-3 py-2 pl-3 outline-none border-0 border-round-3xl">

          <router-link :to="{ name: 'reset-password' }" class="bg-pink-200 text-900 text-xs font-bold no-underline py-2 px-3 border-round-3xl">Submit</router-link>
            
          <hr class="mt-3">
  
          <div class="flex justify-content-between my-3">
            <div>
                <router-link :to="{ name: 'login' }" class="no-underline">
                    <primary-button :button-text="btnLoginLabel">
                    </primary-button>
                </router-link>
            </div>
            <div>
                <router-link :to="{ name: 'register' }" class="no-underline">
                    <primary-button :button-text="btnRegistrationLabel">
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
        btnWelcomeLabel: "Welcome",
        btnLoginLabel: "Login",
        btnRegistrationLabel: "Registration",
        };
    },
  };
  </script>

<style scoped>
input::placeholder {
    font-size: 12px;
    font-weight: bold;
}
</style>
  