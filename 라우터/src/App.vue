<template>
  <!-- <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about">
    About
  </RouterLink> -->
  <!-- <button @click="$router.push({ name: 'home' })">
    Home
  </button>
  <button @click="$router.push({ name: 'about' })">
    About
  </button>
  <button
    @click="$router.push({ 
      name: 'docsId',
      params: { id: '7777' },
      query: { name: 'Hoon', age: 26, email: 'hoon@abc.com'}
    })"
  >
    Documents Id
  </button>
  <RouterView /> -->
  <header>
    <RouterLink to="/">
      Home
    </RouterLink>
    <RouterLink to="/about">
      About
    </RouterLink>
  </header>
  <!-- <button
    v-if="!isLoggedIn"
    @click="logIn"
  >
    Log In!
  </button>
  <button
    v-else
    @click="logOut"
  >
    Log Out!
  </button> -->
  <section>
    <RouterView />
  </section>
</template>

<script>
// export default {
//   computed: {
//     isLoggedIn() {
//       return this.$store.state.user.isLoggedIn
//     } 
//   },
//   created() {
//     this.$store.dispatch('user/initialize')
//   },
//   methods: {
//     logIn() {
//       this.$router.push('/login')
//     },
//     logOut() {
//       this.$store.dispatch('user/logOut')
//     }
//   }
// }
</script>

<style lang="scss" scoped>
header {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display:flex;
  align-items: center
}

section {
  margin-top: 80px
}
</style>