<template>
  <header>
    <h1>Welcome to My Nuxt.js App</h1>
    <nav>
      <nuxt-link to="/">Home</nuxt-link> |
      <nuxt-link to="/about">About</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background-color: #42b983;
  color: white;
  padding: 20px;
}

nav {
  margin-top: 10px;
}
</style>
