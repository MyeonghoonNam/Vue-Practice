<template>
  <div>
    <h1 @click="$emit('click')">
      Click
    </h1>
    <h2 @click="$emit('please', 9)">
      Please
    </h2>
  </div>
</template>

<script>
export default {
  emits: {
    click: null,
    please: number => {
      if(number > 10) {
        return true
      } else {
        console.log('number is not greater than 10')
        return false
      }
    }
  }
}
</script>

<style scoped lang="scss">
$color: orange;

h1 {
  color: $color;
}
</style>
