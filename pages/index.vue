<template>
  <div class="container">
    <div class="carousel">
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        class="carousel__face"
        :style="{
          transform: `rotateY(${index * 40}deg) translateZ(430px)`,
          backgroundImage: `url(${item.image})`
        }"
      >
        <span>{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import nathImage from '@/assets/images/nath.jpg'

const carouselItems = [
  { text: "i like dicks", image: nathImage },
  { text: "I'm Gay", image: nathImage },
  { text: "Silence means yes", image: nathImage },
  { text: "i like dicks", image: nathImage },
  { text: "I'm Gay", image: nathImage },
  { text: "Silence means yes", image: nathImage },
  { text: "I'm Gay", image: nathImage },
  { text: "shrek", image: nathImage },
  { text: "Silence means yes", image: nathImage },
]
</script>

<style scoped>
body {
  margin: 0;
  background: lightgray;
  text-align: center;
  font-family: sans-serif;
  color: #fefefe;
}

.container {
  position: relative;
  width: 320px;
  margin: 100px auto 0 auto;
  perspective: 1000px;
}

.carousel {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate360 60s infinite linear;
}

.carousel__face {
  position: absolute;
  width: 300px;
  height: 187px;
  top: 20px;
  left: 10px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
  display: flex;
}

span {
  margin: auto;
  font-size: 2rem;
  color: red;  /* Make the text color red */
}

@keyframes rotate360 {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
}
</style>
