<template>
  <div>
    <p>This is the homepage of your app. index.vue</p>

    <nuxt-link to="/about">Go to About Page</nuxt-link>
    <nuxt-link to="/staff">Go to Staff Page</nuxt-link>

    <img src="~assets/images/neggy.jpg" alt="Neggy Image" />
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
h1 {
  color: #4CAF50;
  font-family: Arial, sans-serif;
}

p {
  font-size: 18px;
}

a {
  display: block;
  margin-top: 20px;
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
