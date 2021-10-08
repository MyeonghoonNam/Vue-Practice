<template>
  <form @submit.prevent>
    <input
      v-model="userId"
      type="text"
      placeholder="Your ID!"
    />
    <input
      v-model="userPw"
      type="password"
      placeholder="Your Pw!"
    />
    <button @click="logIn">
      Log In !
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      userPw: ''
    }
  },
  methods: {
    logIn() {
      this.$store.dispatch('user/logIn', {
        id: this.userId,
        pw: this.userPw
      })
    }
  }
}
</script>