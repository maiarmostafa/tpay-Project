<template>
  <button :type="type || 'button'" :class="classes">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    classes: String,
    type: String,
  },
};
</script>
