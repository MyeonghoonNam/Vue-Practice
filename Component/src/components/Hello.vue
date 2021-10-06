<template>
  <h1>{{ id }} / {{ title }} / {{ email }}</h1>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    email: {
      type: String,
      default: 'hoon@abc.com'
    }
  },
  
}
</script>

<style scoped lang="scss">
$color: orange;

h1 {
  color: $color;
}
</style>
