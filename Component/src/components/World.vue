<template>
  <h1>World</h1>
</template>

<script>
export default {
  created() {
    console.log('World')
  },
  unmounted() {
    console.log('World Unmounted !')
  } 
}
</script>