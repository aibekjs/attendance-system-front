<template> 
    <div class="w-full lg:w-5" style="margin: 300px auto;"> 
        <input type="text" placeholder="ID" class="w-full mb-3 py-2 pl-3 outline-none border-0 border-round-3xl"> 
        <input type="text" placeholder="Password" class="w-full mb-3 py-2 pl-3 outline-none border-0 border-round-3xl"> 
        <div> 
            <primary-button :button-text="btnRegisterLabel"></primary-button> 
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
      btnWelcomeLabel: "Welcome", 
      btnLoginLabel: "Login", 
      btnRegisterLabel: "Submit", 
      btnActive: "#0d47a1"  
    }; 
  }, 
}; 
</script>