<template>
  <div class="staff-page">
    <h1>Meet Our Team</h1>
    <div class="staff-list">
      <StaffCard
        v-for="(staff, index) in staffList"
        :key="index"
        :id="staff.id"
        :name="staff.name"
        :position="staff.position"
        :photo="staff.photo"
        @staff-click="openModal"
      />
    </div>

    <!-- Modal for staff details -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">X</button>
        <h2>{{ selectedStaff.name }}</h2>
        <p>{{ selectedStaff.position }}</p>
        <img :src="selectedStaff.photo" :alt="selectedStaff.name" class="staff-photo" />
        <p>More detailed information about {{ selectedStaff.name }} will go here.</p>
      </div>
    </div>
  </div>
</template>

<script>
import StaffCard from './StaffCard.vue';
import NeggyImage from '@/assets/images/neggy.jpg';  // Importing image
import NathImage from '@/assets/images/nath.jpg';  // Importing image


export default {
  name: "Staff",
  components: {
    StaffCard
  },
  data() {
    return {
      staffList: [
        {
          id: 1,
          name: "Jane Doe",
          position: "CEO",
          photo: NathImage
        },
        {
          id: 2,
          name: "John Smith",
          position: "Lead Developer",
          photo: NeggyImage // Using imported image
        },
        {
          id: 3,
          name: "Alice Johnson",
          position: "Marketing Manager",
          photo: "https://via.placeholder.com/100"
        },
        {
          id: 4,
          name: "Bob Brown",
          position: "Designer",
          photo: "https://via.placeholder.com/100"
        },
        {
          id: 5,
          name: "Eve White",
          position: "HR Manager",
          photo: "https://via.placeholder.com/100"
        },
        {
          id: 6,
          name: "Chris Green",
          position: "Developer",
          photo: "https://via.placeholder.com/100"
        },
        {
          id: 7,
          name: "Olivia Black",
          position: "Content Writer",
          photo: "https://via.placeholder.com/100"
        },
        {
          id: 8,
          name: "Tom Blue",
          position: "SEO Specialist",
          photo: "https://via.placeholder.com/100"
        }
      ],
      selectedStaff: null,
      isModalOpen: false
    };
  },
  methods: {
    openModal(staff) {
      this.selectedStaff = staff;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedStaff = null;
    }
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

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  text-align: center;
  position: relative;
}
.staff-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
}
.close-btn:hover {
  background: darkred;
}
</style>
