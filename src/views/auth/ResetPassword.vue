<template>
    <div>
      <div class="w-full lg:w-5" style="margin: 0 auto;">
        <div class="text-center text-7xl p-3">
          <font-awesome-icon :icon="['fas', 'graduation-cap']" style="color: #000000;" />
        </div>
        <div class="surface-900 text-center py-4">
          <primary-button :button-text="btnResetPasswordLabel"></primary-button>
        </div>
        <div class="surface-300 px-8 py-3 border-round-bottom-3xl">
          <label for="password" class="block text-900 font-bold ml-3 mb-2">Password</label>
          <input type="text" id="password" class="w-full mb-3 py-2 pl-3 outline-none border-0 border-round-3xl">
          
          <label for="new-password" class="block text-900 font-bold ml-3 mb-2">New Password</label>
          <input type="text" id="new-password" class="w-full py-2 pl-3 outline-none border-0 border-round-3xl">

          <hr class="mt-2">
  
          <div class="text-center my-3">
            <div>
                <router-link :to="{ name: 'login' }" class="no-underline">
                    <primary-button :button-text="btnResetLabel">
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
        btnResetPasswordLabel: "Reset Password",
        btnResetLabel: "Reset",
      };
    },
  };
  </script>
  