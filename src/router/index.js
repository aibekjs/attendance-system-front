import { createRouter, createWebHistory } from 'vue-router';

import Auth from '../layouts/AuthLayout.vue';
import Login from '../views/auth/LoginView.vue';
import ForgotPassword from '../views/auth/ForgotPassword.vue';
import ResetPassword from '../views/auth/ResetPassword.vue';
import RegistrationView from '../views/auth/RegistrationView.vue';

import Main from '../layouts/MainLayout.vue' 

const routes = [
  {
    path: '/auth',
    name: 'auth',
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
        {
          path: 'reset-password',
          name: 'reset-password',
          component: ResetPassword,
        },
        {
          path: 'register',
          name: 'register',
          component: RegistrationView,
        },
      ],
  },
  {
    path: '/',
    name: 'main',
    component: Main,
  }
  // Additional routes for your application
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
