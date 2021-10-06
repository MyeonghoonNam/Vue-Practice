<template>
  <button @click="reverseMsg">
    Click !
  </button>
  <Hello
    :message="msg"
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
