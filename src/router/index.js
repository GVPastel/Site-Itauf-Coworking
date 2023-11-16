import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/HomeView.vue';
import Planos from '@/views/PlanosView.vue';
import Eventos from '@/views/EventosView.vue';

const routes = [
{ path: '/', component: Home },
{ path: '/planos', component: Planos },
{ path: '/eventos', component: Eventos },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
