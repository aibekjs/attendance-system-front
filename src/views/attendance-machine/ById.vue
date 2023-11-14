<template> 
    <div class="w-full lg:w-8 text-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"> 
        <div class="grid">
        <div class="col-12 lg:col-3">
            <img @click="login" :src="require('@/assets/machine-login.png')" alt="login" class="w-full">
        </div>
        <div class="col-12 lg:col-6 py-5">
            <input type="text" placeholder="ID" v-model="id" :class="{ 'error-border': idError }" class="w-full my-3 py-3 pl-3 outline-none border-round-3xl"> 
            <div class="error-message" v-if="idError" :class="'error-text'">{{ idError }}</div> 
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
      id: '',
      idError: '', 
    };
  },
  methods: {
    async login() {
      this.idError = '';

      if (this.id) {
        try {
          const response = await axios.post('http://172.16.4.81:8000/api/loginByCard', {
            student_id: this.id,
          });
  
          if (response.data.status === 200) {
            this.$router.push({ name: 'successpage' }); 
          }
        } catch (error) {
          this.idError = "Incorrect ID!";
          this.id = ''; 
        }
      } else {
        this.idError = 'ID is required!';
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
