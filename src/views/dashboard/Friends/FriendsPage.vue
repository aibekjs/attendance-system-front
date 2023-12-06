<template>
  <div class="px-4">
    <div class="surface-card border-round border-round-3xl p-4" style="min-height: 9rem">
      <div class="text-center font-bold">All friends</div>
      <div class="bg-black-alpha-90 my-3" style="min-height: 0.5rem"></div>
      <div v-for="(friend, index) in friends" :key="index">
        <div class="flex justify-content-between align-items-center">
          <div class="flex p-4">
            <img :src="friend.image" width="150" height="150" :alt="friend.name" class="border-circle" />
            <div class="flex flex-column justify-content-space-evenly font-bold h-full px-5">
              <p>{{ friend.name }}</p>
              <p>{{ friend.id }}</p>
              <p>
                <span v-if="!friend.showInput" @click="toggleInput(friend)" class="cursor-pointer">Send code</span>
                <input class="p-1" v-if="friend.showInput" v-model="friend.codeInput" @keyup.enter="sendCode(friend)" @blur="hideInput(friend)" placeholder="Enter code" />
              </p>
            </div>
          </div>
          <div :class="{ active: friend.showDiv }" class="icon">
            <i @click="toggleDiv(friend)" class="pi pi-bars text-4xl font-bold cursor-pointer"></i>
            <div v-if="friend.showDiv" @click="deleteFriend(friend)" class="font-bold cursor-pointer">Delete friend</div>
          </div>
        </div>
        <hr>
      </div>
    </div>

    <div v-if="isCenteredDivOpen" class="overlay">
      <div class="centered-div">
        {{ centeredDivText }}
        <font-awesome-icon :icon="['fas', 'circle-xmark']" @click="closeCenteredDiv" class="cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const friends = ref([
  { id: 38568, name: 'Joe Biden', image: 'https://image.cnbcfm.com/api/v1/image/106878527-1620223837055-106748412-1602881184740-biden.jpg?v=1620224062', showDiv: false, showInput: false, codeInput: '' },
  { id: 38567, name: 'Donald Trump', image: 'https://hips.hearstapps.com/hmg-prod/images/former-u-s-president-donald-trump-speaks-to-reporters-news-photo-1680289458.jpg?crop=0.643xw:0.963xh;0.220xw,0.0268xh&resize=1200:*', showDiv: false, showInput: false, codeInput: '' },
]);

const isCenteredDivOpen = ref(false);
const centeredDivText = ref('');

const toggleDiv = (friend) => {
  friend.showDiv = !friend.showDiv;
};

const deleteFriend = (friend) => {
  const index = friends.value.indexOf(friend);
  if (index !== -1) {
    friends.value.splice(index, 1); // Remove the friend from the array
    centeredDivText.value = `${friend.name} is deleted!`;
    isCenteredDivOpen.value = true;
  }
};

const closeCenteredDiv = () => {
  isCenteredDivOpen.value = false;
};

const toggleInput = (friend) => {
  friend.showInput = true;
};

const hideInput = (friend) => {
  friend.showInput = false;
};

const sendCode = (friend) => {
  // Add logic for sending the code here
  centeredDivText.value = 'Code sent successfully!';
  hideInput(friend);
  isCenteredDivOpen.value = true;
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
