<template>
  <div class="search-page">
    <div class="search-content">
      <h2>Recherchez sur Spotify</h2>
      <form @submit.prevent="performSearch" class="search-form">
        <input type="text" v-model="searchQuery" placeholder="Artistes, chansons, albums..." class="search-input">
        <button type="submit" class="search-button">Rechercher</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    performSearch() {
      // Ici, vous implémenterez la logique pour interagir avec l'API Spotify
      console.log('Recherche en cours pour:', this.searchQuery);
      // Exemple : this.$axios.get(`votre_endpoint_api?query=${this.searchQuery}`)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');

.search-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #121212, #1db954); /* Un dégradé élégant de noir à vert Spotify */
  color: #fff;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.search-content {
  max-width: 600px;
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

h2 {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.search-form {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.search-input {
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid transparent;
  border-radius: 50px;
  width: 70%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.search-input:focus {
  border-color: #1db954;
  box-shadow: 0 0 8px rgba(29, 185, 84, 0.8);
}

.search-button {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 400;
  background-color: #1db954;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.search-button:hover {
  background-color: #1ed760;
  transform: scale(1.05);
}

/* Ajout d'une légère ombre sur le bouton pour le rendre plus visible */
.search-button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Style pour le focus sur le bouton pour enlever l'outline par défaut et ajouter une ombre cohérente avec le reste du design */
.search-button:focus {
  outline: none;
  box-shadow: 0 0 8px rgba(29, 185, 84, 0.8);
}
</style>
