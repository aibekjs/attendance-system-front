<template> 
    <div class="px-4" :style="{ background: 'url(' + require('@/assets/background.png') + ')' }"> 
        <div class="surface-card border-round border-round-3xl p-4" style="min-height: 9rem"> 
            <div class="font-bold">Can't attend</div>
            <div class="bg-black-alpha-90 my-3" style="min-height: 0.5rem"></div>
            <textarea id="value" rows="8" placeholder="Type here your reason..." class="none w-full bg-pink-200 p-2 text-lg mb-3"></textarea>
            <div class="flex">
                <div>
                    <select v-model="selectedReason" name="reasons" id="reasons" class="none bg-pink-200 p-2 text-lg">
                        <option value="forgot">Forgot my code</option>
                        <option value="ill">Feeling ill</option>
                        <option value="personal">Personal</option>
                    </select>
                </div>
                <div class="w-full">
                    <div v-if="selectedReason === 'forgot'" class="forgot bg-pink-200 w-8 ml-3 p-2" style="height: 150px;">
                        <div class="font-bold text-lg">Forgot my code</div>
                        <input type="text" placeholder="Email" class="none p-2 w-5 mt-5" >
                    </div>
                    <div v-if="selectedReason === 'ill'" class="ill bg-pink-200 w-8 ml-3 p-2" style="height: 150px;">
                        <div class="font-bold text-lg">Feeling ill</div>
                        <div class="mt-5">
                            <label>Upload file: </label>
                            <input type="file" >
                        </div>
                        <div class="mt-5">
                            <label for="date">Enter date of return: </label>
                            <input type="date" id="date" >
                        </div>
                    </div>
                    <div v-if="selectedReason === 'personal'" class="personal bg-pink-200 w-8 ml-3 p-2" style="height: 150px;">
                        <div class="font-bold text-lg">Personal</div>
                        <div class="mt-5">
                            <label>Upload file: </label>
                            <input type="file" >
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-3">
            <div class="center-div bg-pink-200 py-6 w-3 flex justify-content-evenly">
                <Button label="Back" severity="danger" />
                <Button label="Send" severity="info" @click="showCenteredDiv" />
            </div>
        </div> 
    </div> 
    <div v-if="isCenteredDivOpen" class="overlay">
      <div class="centered-div">
          {{ message }} 
          <font-awesome-icon :icon="['fas', 'circle-xmark']" @click="closeCenteredDiv" class="cursor-pointer" />
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selectedReason: '',
      email: '',
      isCenteredDivOpen: false,
      message: ''
    };
  },
  methods: {
    showCenteredDiv() {
      if (this.selectedReason === 'forgot') {
        this.message = 'Watch your email box';
      } else {
        this.message = 'Success';
      }
      this.isCenteredDivOpen = true;
    },
    closeCenteredDiv() {
      this.isCenteredDivOpen = false;
    }
  }
};
</script>

<style>
.none {
    outline: none;
    border: 0;
}
.center-div {
  margin: 0 auto; 
  border-radius: 10px;
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