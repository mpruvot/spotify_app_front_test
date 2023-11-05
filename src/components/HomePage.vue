<template>
  <div class="home">
    <div class="content">
      <h1>Spotify Explorer</h1>
      <button @click="goToSearch" class="enter-button">Entrer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToSearch() {
      this.$router.push('/search');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
  color: #333;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.content {
  max-width: 600px;
  transform: translateY(-50px);
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 0.5s;
}

@keyframes fadeInUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

h1 {
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.enter-button {
  padding: 1rem 2rem;
  font-size: 1.25rem;
  font-weight: 400;
  background-color: #1db954;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Ombre plus légère pour un effet subtil */
}

.enter-button:hover {
  background-color: #1ed760;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Ombre légèrement plus prononcée au survol */
  transform: translateY(-2px); /* Légère élévation au survol */
}

button:focus,
input:focus {
  outline: none;
  box-shadow: none;
}
</style>
