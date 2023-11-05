<template>
  <div class="search-page">
    <div class="content">
      <h1>Recherchez votre musique</h1>
      <form @submit.prevent="performSearch" class="search-form">
        <div class="select-wrapper">
          <select v-model="searchType" class="search-select">
            <option value="artist">Artiste</option>
            <option value="album">Album</option>
            <option value="track">Piste</option>
            <option value="playlist">Playlist</option>
          </select>
        </div>
        <input type="text" v-model="searchQuery" placeholder="Rechercher..." class="search-input">
        <button type="submit" class="search-button">Rechercher</button>
      </form>
      <div v-if="searchResults" class="results">
        <!-- Résultats pour un artiste -->
        <template v-if="searchType === 'artist'">
          <div class="result-item" v-if="searchResults.id">
            <h2>{{ searchResults.name }}</h2>
            <p>Genres: {{ searchResults.genres.join(', ') }}</p>
            <a :href="searchResults.external_urls.spotify" target="_blank" class="spotify-link">Écouter sur Spotify</a>
          </div>
        </template>
        <!-- Résultats pour un album -->
        <template v-if="searchType === 'album'">
          <div class="result-item" v-if="searchResults.id">
            <h2>{{ searchResults.name }}</h2>
            <p>Artiste: {{ searchResults.artists[0].name }}</p>
            <p>Date de sortie: {{ searchResults.release_date }}</p>
            <p>Nombre de pistes: {{ searchResults.total_tracks }}</p>
            <a :href="searchResults.artists[0].external_urls.spotify" target="_blank" class="spotify-link">Écouter sur Spotify</a>
          </div>
        </template>
        <!-- Résultats pour une piste -->
        <template v-if="searchType === 'track'">
          <div class="result-item" v-if="searchResults.id">
            <h2>{{ searchResults.name }}</h2>
            <p>Album: {{ searchResults.album.name }}</p>
            <p>Artiste: {{ searchResults.artists[0].name }}</p>
            <a :href="searchResults.external_urls.spotify" target="_blank" class="spotify-link">Écouter sur Spotify</a>
          </div>
        </template>
        <!-- Résultats pour une playlist -->
        <template v-if="searchType === 'playlist'">
          <div class="result-item" v-if="searchResults.id">
            <h2>{{ searchResults.name }}</h2>
            <p v-html="searchResults.description"></p>
            <a :href="searchResults.external_urls.spotify" target="_blank" class="spotify-link">Écouter sur Spotify</a>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SearchPage',
  data() {
    return {
      searchQuery: '',
      searchType: 'artist', // type de recherche par défaut
      searchResults: null,
    };
  },
  methods: {
    performSearch() {
      const apiUrl = `http://localhost:8000/${this.searchType}/${encodeURIComponent(this.searchQuery)}`;
      axios.get(apiUrl)
        .then(response => {
          this.searchResults = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la recherche:', error);
        });
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');

.search-page {
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

h1 {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.search-form {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.select-wrapper {
  position: relative;
}

.search-select, .search-input, .search-button {
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 50px;
  border: none;
  transition: all 0.3s ease;
}

.search-select {
  background-color: #fff;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-input {
  flex-grow: 1;
  background-color: #fff;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-button {
  background-color: #1db954;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-button:hover {
  background-color: #1ed760;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.results {
  margin-top: 2rem;
}

.result-item {
  margin-bottom: 1rem;
}

.result-item h2 {
  font-size: 2rem;
  color: #333;
}

.result-item p {
  font-size: 1rem;
  color: #666;
}

@keyframes fadeInUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

