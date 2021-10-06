<template>
  <label>
    <input
      :value="message"
      @input="$emit('update:message', $event.target.value)"
    />
  </label>
  <label>
    <input
      :value="name"
      @input="$emit('update:name', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    // v-model에 특정 네이밍 값이 없으면 기본값은 modelValue로 props에 포함되어진다.
    // modelValue: {
    //   type: String,
    //   default: ''
    // }
    message: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  emits: ['update:message', 'update:name']
}
</script>

<style scoped lang="scss">
$color: orange;

h1 {
  color: $color;
}
</style>
