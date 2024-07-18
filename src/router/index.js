import { createRouter, createWebHistory } from 'vue-router';
import NoteFound from '../oll-pages/NoteFound.vue'; 

const routes = [

  {
    path: '/',
    name: 'NoteFound',
    component: NoteFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
