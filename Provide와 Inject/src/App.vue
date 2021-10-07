<template>
  <h1 @click="msg += '!'">
    {{ msg }}
  </h1>
  <Parent />
</template>

<script>
import Parent from '~/components/Parent'
import { computed } from 'vue'

export default {
  components: {
    Parent,
  },
  provide() {
    // 기본적으로 반응성을 가지지 않는다.
    return {
      msg: computed(() => this.msg) 
    }
  },
  data() {
    return {
      msg: 'Hello Vue ~!',
    }
  },
}
</script>
