<template>
  <footer>
    <p>© 2025 My Nuxt App</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background: linear-gradient(90deg, #a2d4f3, #1e3c72); /* Light to dark blue */
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10; /* Ensures the footer stays on top */
}
</style>
