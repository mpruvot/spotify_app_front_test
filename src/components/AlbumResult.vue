<template>
    <div class="album-result">
      <h2>{{ album.name }}</h2>
      <p>Par {{ album.artists.map(artist => artist.name).join(', ') }}</p>
      <p>Date de sortie : {{ album.release_date }}</p>
      <p>Nombre de pistes : {{ album.total_tracks }}</p>
      <a :href="album.external_urls.spotify" target="_blank" class="spotify-link">Écouter sur Spotify</a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      album: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .album-result {
    margin-bottom: 1rem;
    padding: 1rem;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .album-result:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .album-result h2 {
    font-size: 1.5rem;
    color: #333;
  }
  
  .album-result p {
    font-size: 1rem;
    color: #666;
  }
  
  .spotify-link {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 1rem 2rem;
    background-color: #1db954;
    color: #fff;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 400;
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .spotify-link:hover {
    background-color: #1ed760;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  </style>
  