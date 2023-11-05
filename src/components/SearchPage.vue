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
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchPage',
    data() {
      return {
        searchQuery: '',
        searchType: 'artist' // type de recherche par défaut
      };
    },
    methods: {
      performSearch() {
        // Logique pour interagir avec l'API Spotify
        console.log('Recherche en cours pour:', this.searchQuery, 'Type:', this.searchType);
        // Vous ajouterez ici le code pour effectuer la recherche en utilisant l'API.
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
  
  .search-form {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .select-wrapper {
    position: relative;
    width: auto;
  }
  
  .search-select {
    padding: 1rem 2rem 1rem 1rem;
    font-size: 1.25rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    background-color: #fff;
    color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  
  .select-wrapper::after {
    content: '\25BC';
    font-size: 1.25rem;
    color: #333;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    pointer-events: none;
  }
  
  .search-select:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(29, 185, 84, 0.8);
  }
  
  .search-input {
    padding: 1rem 2rem;
    font-size: 1.25rem;
    border: none;
    border-radius: 50px;
    width: 70%;
    background-color: #fff;
    color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  
  .search-input:focus {
    box-shadow: 0 0 8px rgba(29, 185, 84, 0.8);
  }
  
  .search-button {
    padding: 1rem 2rem;
    font-size: 1.25rem;
    font-weight: 400;
    background-color: #1db954;
    color: #fff;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .search-button:hover {
    background-color: #1ed760;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  
  button:focus,
  input:focus,
  select:focus {
    outline: none;
    box-shadow: none;
  }
  </style>
  