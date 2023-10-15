import { createRouter, createWebHistory } from 'vue-router';

import Auth from '../layouts/AuthLayout.vue';
import Login from '../views/auth/LoginView.vue';
import ForgotPassword from '../views/auth/ForgotPassword.vue'

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
        {
          path: 'forgot-password',
          name: 'forgot-password',
          component: ForgotPassword,
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
