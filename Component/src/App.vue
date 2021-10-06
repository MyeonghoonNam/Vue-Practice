<template>
  <h1>{{ msg }}</h1>
  <h1>{{ name }}</h1>
  <Hello
    v-model:message="msg"
    v-model:name="name"
  />
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
      name: 'hoon'
    }
  },
}
</script>
