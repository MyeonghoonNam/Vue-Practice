<template>
  <button @click="currentComponent = 'Hello'">
    Hello !
  </button>
  <button @click="currentComponent = 'World'">
    World !
  </button>
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
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
      currentComponent: 'Hello'
    }
  },
}
</script>
