<template> 
<div class="w-full lg:w-8 text-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"> 
    <h1 class="m-0"> For student </h1>
    <div class="grid">
    <div class="col-12 lg:col-3">
      <img @click="login" :src="require('@/assets/machine-login.png')" alt="login" class="w-full">
    </div>
    <div class="col-12 lg:col-6 py-5">
        <input type="text" placeholder="ID" v-model="username" :class="{ 'error-border': usernameError || usernameRequired }" class="w-full mb-3 py-3 pl-3 outline-none border-round-3xl"> 
        <div v-if="usernameRequired" :class="'error-text ml-3 mb-3'">{{ usernameRequired }}</div>
        <input type="text" placeholder="Password" v-model="password" :class="{ 'error-border': passwordError }" class="w-full mb-4 py-3 pl-3 outline-none border-round-3xl">
        <div class="error-message" v-if="passwordError" :class="'error-text ml-3 mb-3'">{{ passwordError }}</div> 
    </div>
    <div class="col-12 lg:col-3">
        <router-link :to="{ name: 'machinelogin' }">
            <img :src="require('@/assets/machine-back.png')" alt="back" class="w-full">
        </router-link>
    </div>
    </div>
</div> 
</template> 
 
<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      usernameError: '', 
      usernameRequired: '',
      passwordError: '',
    };
  },
  methods: {
    async login() {
      if (!this.username) {
        this.usernameRequired = "ID is required!";
      }

      if (!this.password) {
        this.passwordError = "Password is required!";
      }

      if (!this.passwordError && !this.usernameRequired) {
        try {
          const response = await axios.post('http://172.16.4.81:8000/api/loginByMachine', {
            student_id: this.username,
            password: this.password
        });

          if (response.data.status === 200) {
            console.log(response.data.access_token);
            this.$router.push({ name: 'successpage' });
          }
        } catch (error) {
          console.error(error.student_id);
          this.usernameError = " "
          this.passwordError = "Incorrect ID or password!";

          this.username = "";
          this.password = ""; 
        }
      }
    }
  },
};
</script>

<style>
.error-text {
  color: red;
}
.error-border {
  border: 1px solid red; 
}
</style>
