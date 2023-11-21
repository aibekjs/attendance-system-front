<template> 
  <div class="px-4">
        <div class="surface-card border-round border-round-3xl p-4" style="min-height: 9rem">
            <div class="text-center font-bold">All Friends</div>
            <div class="bg-black-alpha-90 my-3" style="min-height: 0.5rem"></div>
            <InputText type="text" placeholder="Start searching for friend" />
            <div class="flex justify-content-between align-items-center">
              <div class="flex p-4">
                <img src="https://frankfurt.apollo.olxcdn.com/v1/files/r3xsf4z97vnv3-KZ/image;s=1080x1071" width="150" height="150" alt="Trump" class="border-circle" />
                <div class="flex flex-column justify-content-space-evenly font-bold h-full px-5">
                  <p>Donald Trump</p>
                  <p>Send code</p>
                  <p>Don't have a new code</p>
                </div>
              </div>
              <div :class="{ active: showDiv }" class="icon">
                <i @click="toggleDiv" class="pi pi-bars text-4xl font-bold cursor-pointer"></i>
                <div v-if="showDiv" @click="deleteFriend" class="font-bold cursor-pointer">Delete friend</div>
              </div>
            </div>
            <hr>
        </div>
    </div>
    <div v-if="isCenteredDivOpen" class="overlay">
      <div class="centered-div">
        Friend is deleted! <font-awesome-icon :icon="['fas', 'circle-xmark']" @click="closeCenteredDiv" class="cursor-pointer"/>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showDiv = ref(false);
const isCenteredDivOpen = ref(false);

const toggleDiv = () => {
  showDiv.value = !showDiv.value;
};

const deleteFriend = () => {
  isCenteredDivOpen.value = true;
};

const closeCenteredDiv = () => {
  isCenteredDivOpen.value = false;
};
</script>

<style>
.icon.active {
  padding: 16px;
  text-align: center;
  background-color: #fbb6ce; 
  border-radius: 25px;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  z-index: 999; 
  display: flex;
  align-items: center;
  justify-content: center;
}
.centered-div {
  background-color: #fbb6ce; 
  padding: 25px 50px;
  border-radius: 8px;
  z-index: 1000; 
  font-size: 24px;
}
</style>