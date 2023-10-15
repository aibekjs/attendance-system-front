<template>
  <div class="auth-layout">
    <auth-layout></auth-layout>
  </div>
</template>

<script>
import AuthLayout from './layouts/AuthLayout';

export default {
  name: 'App',
  components: {
    AuthLayout
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
