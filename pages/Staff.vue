<template>
  <div class="staff-page">
    <h1>Meet Our Team</h1>
    <div class="staff-list">
      <StaffCard
        v-for="(staff, index) in staffList"
        :key="index"
        :name="staff.name"
        :position="staff.position"
        :photo="staff.photo"
      />
    </div>
  </div>
</template>

<script>
import StaffCard from './StaffCard.vue';

export default {
  name: "Staff",
  components: {
    StaffCard
  },
  data() {
    return {
      staffList: [
        {
          name: "Jane Doe",
          position: "CEO",
          photo: "https://via.placeholder.com/100"
        },
        {
          name: "John Smith",
          position: "Lead Developer",
          photo: "https://via.placeholder.com/100"
        },
        {
          name: "Alice Johnson",
          position: "Marketing Manager",
          photo: "https://via.placeholder.com/100"
        }
      ]
    };
  }
};
</script>

<style scoped>
.staff-page {
  padding: 2rem;
  text-align: center;
}
.staff-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}
</style>
