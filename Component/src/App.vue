<template>
  <h1>{{ msg }}</h1>
  <Hello
    class="hello"
    style="font-size: 100px"
    @click="msg += '!'"
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
      msg: 'Hello Vue!'
    }
  },
}
</script>
