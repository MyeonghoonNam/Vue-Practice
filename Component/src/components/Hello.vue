<template>
  <h1
    v-bind="$attrs"
  >
    Hello
  </h1>

  <h2>
    Hi
  </h2>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>

<style scoped lang="scss">
$color: orange;

h1 {
  color: $color;
}
</style>
