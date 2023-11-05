<template> 
    <machine-login-form :header="header" :placeholder="placeholder" />
  </template> 
   
  <script> 
  import MachineLoginForm from "@/components/MachineLoginForm.vue"; 
  export default { 
    components: { 
      MachineLoginForm, 
    }, 
    data() { 
      return { 
        header: "For friend",
        placeholder: "Code",
      }; 
    }, 
  }; 
  </script>