<template>
  <h1>{{ msg }}</h1>
  <Hello>
    <template #def>
      <h2>Hello Vue ?</h2>
      <p>The brown fox!</p>
    </template>
    <template #abc>
      <h3>abc</h3>
    </template>
    <template #default="{ username }">
      <h2>Bye {{ username }}</h2>
    </template>
  </Hello>
  <Button>Click me !</Button>
</template>

<script>
import Hello from '~/components/Hello' // 컴포넌트 지역 등록

export default {
  components: {
    Hello
  },
  data() {
    return {
      msg: 'Hello Vue!',
    }
  },
}
</script>
