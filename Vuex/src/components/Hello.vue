<template>
  <h1>Hello</h1>
  <div>{{ msg }}</div>
  <div>{{ count }}</div>
  <button @click="increaseCount">
    +
  </button>
  <button @click="decreaseCount">
    -
  </button>
  <div>{{ message }} / {{ reversedMessage }}</div>
  <button @click="fetchTodo">
    Fetch Todo!
  </button>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'msg'
    ]),
    ...mapState('count', [
      'count'
    ]),
    ...mapState('message', [
      'message'
    ]),
    ...mapGetters('message', [
      'reversedMessage'
    ]),
  },
  methods: {
    ...mapMutations('count', [
      'increaseCount',
      'decreaseCount'
    ]),
    ...mapActions('message', [
      'fetchTodo'
    ])
  }
}
</script>

<style scoped lang="scss">
$color: orange;

h1 {
  color: $color;
}
</style>
