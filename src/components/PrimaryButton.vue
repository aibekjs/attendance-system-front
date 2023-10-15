<template>
  <a
    href="#"
    :style="{ backgroundColor: buttonBgColor }"
    class=" text-white font-bold no-underline px-5 py-2 border-round-3xl"
  >
    {{ buttonText }}</a
  >
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    buttonBgColor: {
      type: String,
      default: "#d32f2f"
    }
  },
}
</script>