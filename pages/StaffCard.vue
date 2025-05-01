<template>
  <div class="staff-card">
    <img :src="photo" :alt="name" class="staff-photo" />
    <h3>{{ name }}</h3>
    <p>{{ position }}</p>
  </div>
</template>

<script>
export default {
  name: "StaffCard",
  props: {
    name: String,
    position: String,
    photo: String
  }
};
</script>

<style scoped>
.staff-card {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.staff-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
