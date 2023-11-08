<template>
  <div class="surface-100 text-center border-round-3xl" > 
      <div class="py-6"> 
          <font-awesome-icon :icon="icon" style="font-size: 250px" color="grey" />    
      </div> 
      <h1 class="m-0 p-3 bg-red-900 text-white border-round-3xl"> 
          {{ text }}
      </h1>
  </div> 
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: Array,
      required: true,
    },
  },
}
</script>