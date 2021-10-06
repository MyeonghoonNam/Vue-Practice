<template>
  <h1 @click="updateMsg">
    {{ newMsg }}
  </h1>
</template>

<script>
export default {
  props: {
    message: String,
  },
  data() {
    return {
      newMsg: this.message
    }
  },
  methods: {
    updateMsg() {
      this.newMsg = 'Good~'
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
