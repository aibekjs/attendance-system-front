<template>
  <div>
    <div class="w-full lg:w-5" style="margin: 0 auto;">
      <div class="text-center text-7xl p-3">
        <font-awesome-icon :icon="['fas', 'graduation-cap']" style="color: #000000;" />
      </div>
      <div class="surface-900 text-center py-4">
        <primary-button></primary-button>
      </div>
      <div class="surface-300 px-8 py-3 border-round-bottom-3xl">
        <label for="email" class="block text-900 font-bold ml-3 mb-2">Email</label>
        <input type="text" id="email" class="w-full mb-3 py-2 outline-none border-0 border-round-3xl">
        
        <label for="password" class="block text-900 font-bold ml-3 mb-2">Password</label>
        <input type="text" id="password" class="w-full mb-3 py-2 outline-none border-0 border-round-3xl">
        
        <a href="#" class="bg-pink-200 text-900 text-xs font-bold no-underline p-2 border-round-3xl">Forgot Password?</a>

        <hr class="my-3">

        <div class="flex justify-content-between">
          <a href="#" class="bg-blue-700 text-white font-bold no-underline px-5 py-2 border-round-3xl">Login</a>
          <primary-button></primary-button>
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
};
</script>
