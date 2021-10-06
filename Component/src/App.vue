<template>
  <Hello
    v-bind="post"
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
      post: {
        id: 2,
        title: 'Hello Vue!',
        email: 'test@abc.com'
      }
    }
  },
}
</script>
