<template>
  <div>
    <h1
      v-if="msg"
      class="message"
      @click="log"
    >
      {{ msg }}
    </h1>
    <div></div>
    <Hello />
  </div>
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: 'Hello Vue ~!',
    }
  },
}
</script>
