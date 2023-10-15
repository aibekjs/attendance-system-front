<template>
  <div class="auth-layout bg-pink-200">
    <div class="surface-900 h-3rem"></div>
    <router-view />
    <the-footer class="mt-auto"></the-footer>
  </div>
</template>

<script>
import TheFooter from "../components/TheFooter";
export default {
  components: {
    TheFooter,
  },
};
</script>

<style>
.auth-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes the full viewport height */
}
</style>
