import { createRouter, createWebHistory } from 'vue-router';
import Bab1Component from './components/Bab1Component.vue';
import Bab2Component from './components/Bab2Component.vue';
import Bab3Component from './components/Bab3Component.vue';
import Bab4Component from './components/Bab4Component.vue'; // Komponen untuk BAB 4

const routes = [
  {
    path: '/tugasiswa/bab1',
    component: Bab1Component // Komponen untuk BAB 1
  },
  {
    path: '/tugasiswa/bab2',
    component: Bab2Component // Komponen untuk BAB 2
  },
  {
    path: '/tugasiswa/bab3',
    component: Bab3Component // Komponen untuk BAB 3
  },
  {
    path: '/tugasiswa/bab4',
    component: Bab4Component // Komponen untuk BAB 4
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
