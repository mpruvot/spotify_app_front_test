import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import SearchPage from '../components/SearchPage.vue'; // Assurez-vous que le chemin d'accès est correct

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/search', // Le chemin d'accès pour la page de recherche
    name: 'SearchPage',
    component: SearchPage // Le composant à utiliser pour cette route
  },
  // ... vos autres routes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
