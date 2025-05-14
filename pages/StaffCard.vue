<template>
  <div class="staff-card" @click="handleClick">
    <img :src="photo" :alt="name" class="staff-photo" />
    <h3>{{ name }}</h3>
    <p>{{ position }}</p>
  </div>
</template>

<script>
export default {
  name: "StaffCard",
  props: {
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      // emit the full staff object so the parent can show details
      this.$emit("staff-click", {
        name: this.name,
        position: this.position,
        photo: this.photo
      });
    }
  }
};
</script>

<style scoped>
.staff-card {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 0.75rem; /* Reduced padding for tighter spacing */
  text-align: center;
  width: 180px; /* Reduced width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;          /* indicates clickability */
  transition: transform 0.1s;
  margin: 0.5rem; /* Reduced margin between cards */
}

.staff-card:hover {
  transform: translateY(-4px);
}

.staff-photo {
  width: 80px; /* Reduced photo size */
  height: 80px; /* Reduced photo size */
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
}
</style>
