<template> 
  <div class="px-4">
    <div class="surface-card border-round border-round-3xl p-4" style="min-height: 9rem">
      <div class="text-center font-bold">All Friends</div>
      <div class="bg-black-alpha-90 my-3" style="min-height: 0.5rem"></div>
      <InputText type="text" placeholder="Start searching for friend" />
      <div class="flex justify-content-between align-items-center">
        <div class="flex p-4">
          <div class="flex flex-column justify-content-space-evenly font-bold h-full px-5">
            <div class="post" v-for="friend in friends" :key="friend.id">
              <div>
                <div v-for="friend in friends" :key="friend.id" style="display: flex;">
                  <img :src="friend.photoUrl" alt="Friend Photo"  width="150" height="150"  class="border-circle"/>
                  <p><strong>Name:</strong> {{ friend.name }}</p>
                  <p><strong>ID :</strong> {{ friend.friend_id }}</p>
                  <div :class="{ active: showDiv }" class="icon">
                    <i @click="toggleDiv" class="pi pi-bars text-4xl font-bold cursor-pointer"></i>
                    <div v-if="showDiv" @click="deleteFriend" class="font-bold cursor-pointer">Delete friend</div>
                  </div>
                  <hr >
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <hr>
    </div>
  </div>
  
  
</template>

<script>

import axios from 'axios';

export default {
  methods: {
    toggleDiv() {
      this.showDiv = !this.showDiv;
    },
    deleteFriend() {
      this.isCenteredDivOpen = true;
    },
   
    fetchFriendsData() {if (process.env.NODE_ENV === 'development') {
        // Mock data for testing
        this.friends = [
          { id: 1, name: 'John Doe', friend_id: '123', photoUrl: 'data:image/jpeg;base64,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' },
          { id: 2, name: 'Jane Doe', friend_id: '456', photoUrl: 'data:image/jpeg;base64,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' },
          // Add more mock data as needed
        ];
      } else {
      const backendUrl = 'http://attendancesystemback-env.eba-nmg2muhp.us-east-1.elasticbeanstalk.com/api/friends';

      axios.get(backendUrl)
        .then(response => {
          this.friends = response.data;
          console.log(response)
        })
        .catch(error => {
          console.error('Error fetching friends data:', error);
        });}
    },
  },
  data() {
    return {
      friends: [],
      showDiv: false,
      isCenteredDivOpen: false,
    };
  },
  mounted() {
    this.fetchFriendsData();
  },
};
</script>
<style scoped> 
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