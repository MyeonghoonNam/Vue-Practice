<template>
  <h1 @click="$emit('reverse')">
    {{ message }}
  </h1>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  emits: ['reverse']
}
</script>

<style scoped lang="scss">
$color: orange;

h1 {
  color: $color;
}
</style>
