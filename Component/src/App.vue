<template>
  <h1>Hello Vue!</h1>
  <Button />
  <Hello />
</template>

<script>
import Hello from '~/components/Hello' // 컴포넌트 지역 등록

export default {
  components: {
    Hello
  }
}
</script>
