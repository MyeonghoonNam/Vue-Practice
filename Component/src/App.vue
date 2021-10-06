<template>
  <h1>{{ msg }}</h1>
  <Hello
    :message="msg"
    @reverse="reverseMsg"
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
  methods: {
    reverseMsg() {
      this.msg = this.msg.split('').reverse().join('')
    }
  }
}
</script>
