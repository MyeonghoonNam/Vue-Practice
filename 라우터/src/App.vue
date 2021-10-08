<template>
  <!-- <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about">
    About
  </RouterLink> -->
  <button @click="$router.push({ name: 'home' })">
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
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Vue ~!',
    }
  },
}
</script>
