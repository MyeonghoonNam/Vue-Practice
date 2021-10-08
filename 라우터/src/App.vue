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
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about">
    About
  </RouterLink>
  <button
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
  </button>
  <RouterView />
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn
    } 
  },
  created() {
    this.$store.dispatch('user/initialize')
  },
  methods: {
    logIn() {
      this.$router.push('/login')
    },
    logOut() {
      this.$store.dispatch('user/logOut')
    }
  }
}
</script>
