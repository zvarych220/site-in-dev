import { createRouter, createWebHistory } from 'vue-router';
import Home from '../oll-pages/Home.vue'; 
import NoteFound from '../oll-pages/NoteFound.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/notefound',
    name: 'NoteFound',
    component: NoteFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
