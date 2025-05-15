<template>
  <div class="container">
    <!-- About Content -->
    <section class="about-section">
      <h2 class="section-title">Who We Are.</h2>
      <div class="about-cards">
        <!-- Mission Card -->
        <div class="about-card">
          <h2><span class="card-icon">🎯</span> Our Mission</h2>
          <p v-for="(paragraph, index) in mission" :key="'mission-' + index">
            {{ paragraph }}
          </p>
        </div>

        <!-- Vision Card -->
        <div class="about-card">
          <h2><span class="card-icon">👁️</span> Our Vision</h2>
          <p v-for="(paragraph, index) in vision" :key="'vision-' + index">
            {{ paragraph }}
          </p>
        </div>

        <!-- Goals Card -->
        <div class="about-card">
          <h2><span class="card-icon">🏆</span> Our Goals</h2>
          <p>{{ goalsIntro }}</p>
          <ul>
            <li v-for="(goal, index) in goals" :key="'goal-' + index">
              {{ goal }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      mission: [
        'Our mission at SNC Hospital is to provide exceptional, patient-centered healthcare with compassion, dignity, and respect. We are committed to delivering comprehensive medical services that address both the physical and emotional needs of our patients and their families.',
        'We strive to make quality healthcare accessible to all members of our community, regardless of background or circumstance. Through our commitment to clinical excellence, continuous improvement, and ethical practice, we aim to be the trusted healthcare partner for the communities we serve.'
      ],
      vision: [
        'Healing Hearts Hospital envisions a healthier tomorrow where every individual has access to world-class healthcare delivered with empathy and excellence. We aspire to be the leading healthcare institution known for innovative medical solutions, outstanding patient experiences, and positive health outcomes.',
        'We see a future where technological advancement and human compassion work hand in hand to transform healthcare delivery. Our vision extends beyond treatment to embrace prevention, education, and holistic wellbeing, creating a community where health flourishes.',
        'We aim to be pioneers in medical research and education, training the next generation of healthcare professionals who will carry forward our legacy of healing with heart.'
      ],
      goalsIntro:
        'To realize our mission and vision, we have established these core strategic goals:',
      goals: [
        'Excellence in Patient Care: Deliver the highest standard of medical care with measurable quality outcomes that exceed national benchmarks',
        'Patient Experience: Create healing environments and compassionate interactions that make every patient feel valued, respected, and heard',
        'Healthcare Innovation: Adopt and develop cutting-edge technologies and practices that advance medical care and operational efficiency',
        'Community Health: Improve population health through preventive care, education, and community outreach programs',
        'Workforce Development: Attract, develop, and retain exceptional healthcare professionals who embody our values and mission',
        'Sustainability: Ensure financial stability while making responsible investments in facilities, technology, and human resources',
        'Health Equity: Eliminate disparities in healthcare access and outcomes across all segments of our community',
        'Research Advancement: Contribute to medical knowledge through clinical research and collaboration with academic and industry partners'
      ]
    };
  }
};
</script>

<style scoped>
:root {
  --primary: #0277bd;
  --secondary: #03a9f4;
  --accent: #00c853;
  --light: #f5f5f5;
  --dark: #263238;
  --grey: #78909c;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: var(--light);
  color: var(--dark);
  line-height: 1.7;
  padding: 2rem 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: 6rem;

}

.about-section {
  padding: 1rem 0 3rem;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  color: var(--primary);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 3px;
  background-color: var(--accent);
}

.about-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

.about-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
}

.about-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  width: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
}

.about-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.about-card h2 {
  color: var(--primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
}

.card-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.about-card p {
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  color: #455a64;
}

.about-card p:last-child {
  margin-bottom: 0;
}

.about-card ul {
  margin-left: 1.5rem;
  margin-top: 1.2rem;
}

.about-card li {
  margin-bottom: 1rem;
  color: #455a64;
  font-size: 1.05rem;
  position: relative;
  padding-left: 0.5rem;
}

.about-card li::marker {
  color: var(--accent);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .about-card h2 {
    font-size: 1.5rem;
  }

  .about-card {
    padding: 2rem;
  }
}
</style>
