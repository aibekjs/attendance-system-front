import { createRouter, createWebHistory } from 'vue-router';

import Auth from '../layouts/AuthLayout.vue';
import Login from '../views/auth/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
    children: [
        {
          path: 'login',
          name: 'login',
          component: Login,
        },
      ],
  },
  // Additional routes for your application
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
