<template> 
    <machine-login :header="header" :placeholder="placeholder" />
  </template> 
   
  <script> 
  import MachineLogin from "@/components/MachineLogin.vue"; 
  export default { 
    components: { 
      MachineLogin, 
    }, 
    data() { 
      return { 
        header: "For friend",
        placeholder: "Code",
      }; 
    }, 
  }; 
  </script>