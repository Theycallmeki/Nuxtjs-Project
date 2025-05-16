<template>
<div class="bg">
  <div class="carousel">
    <div 
      v-for="(slide, index) in slides" 
      :key="index"
      class="carousel-item"
      :class="{ active: currentSlide === index }"
    >
      <img :src="slide.image" alt="" />
    </div>

    <div class="carousel-controls">
      <button @click="prevSlide" class="carousel-control">❮</button>
      <button @click="nextSlide" class="carousel-control">❯</button>
    </div>
  </div>
</div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Import images
import neggyImage from '@/assets/images/neggy.jpg'
import nathImage from '@/assets/images/nath.jpg'
import cjImage from '@/assets/images/cj.jpg'

const currentSlide = ref(0)
const slides = ref([
  { image: neggyImage },
  { image: nathImage },
  { image: cjImage }
])

let autoplayInterval = null

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  clearInterval(autoplayInterval)
})
</script>

<style scoped>
.bg{
background-color: #dbeafe; /* Added background color */

}
.carousel {
  position: relative;
  height: 600px;
  overflow: hidden;
  
}

.carousel-item {
  position: absolute;
  top: 50px ;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: fill; /* Ensure the image covers the entire container */
  
}

.carousel-item.active {
  opacity: 1;
  
}

.carousel-controls {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  
}

.carousel-control {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: gray; /* Gray control button */
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  
}
</style>
