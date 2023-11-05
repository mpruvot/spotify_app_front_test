<template>
    <div class="playlist-result">
      <h2>{{ playlist.name }}</h2>
      <p v-html="playlist.description"></p>
      <a :href="playlist.external_urls.spotify" target="_blank">Écouter sur Spotify</a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      playlist: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
.playlist-result {
  margin-bottom: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.playlist-result:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.playlist-result h2 {
  font-size: 1.5rem;
  color: #333;
}

.playlist-result p {
  font-size: 1rem;
  color: #666;
}

.playlist-result a {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #1db954;
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.playlist-result a:hover {
  background-color: #1ed760;
}
</style>
