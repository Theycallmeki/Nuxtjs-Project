<template>
  <header>
    <h1>Snc Hospital System</h1>
    <nav class="navbar">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/staff">Staff</nuxt-link> <!-- Added the Staff link -->
      <nuxt-link to="/contact">Contact</nuxt-link> <!-- Added the Staff link -->

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
  display: flex;
  justify-content: space-between; /* Space between title and navbar */
  align-items: center; /* Vertically align title and navbar */
  background: linear-gradient(90deg, #a2d4f3, #1e3c72); /* Light to dark blue */
  color: white;
  padding: 10px 20px; /* Adjust padding as needed */
  position: fixed; /* Fix header to the top of the screen */
  top: 0; /* Position at the top */
  left: 0; /* Ensure it starts from the left edge */
  width: 100%; /* Ensure it takes up the full width */
  z-index: 10; /* Keep header above other elements */
  box-sizing: border-box; /* Include padding in the total width calculation */
}

h1 {
  margin: 0; /* Remove default margin */
  font-size: 1.5rem; /* Adjust font size */
}

nav.navbar {
  display: flex;
  gap: 15px;
  flex-grow: 1; /* Allow navbar to grow and occupy available space */
  justify-content: flex-end; /* Align navbar links to the right */
  margin-right: 20px; /* Add margin on the right to avoid links overlapping */
}

nav.navbar a {
  position: relative;
  color: white;
  text-decoration: none;
  padding: 5px 10px; /* Reduced padding */
  font-size: 1rem; /* Reduced font size */
  transition: color 0.3s ease;
}

nav.navbar a::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease;
  border-radius: 2px;
}

nav.navbar a:hover::after {
  transform: translateX(-50%) scaleX(1);
}
</style>
