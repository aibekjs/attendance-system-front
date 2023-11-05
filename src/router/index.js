import { createRouter, createWebHistory } from 'vue-router'; 
 
import Auth from '../layouts/AuthLayout.vue'; 
import Login from '../views/auth/LoginView.vue'; 
import ForgotPassword from '../views/auth/ForgotPassword.vue'; 
import ResetPassword from '../views/auth/ResetPassword.vue'; 
import RegistrationView from '../views/auth/RegistrationView.vue'; 
import AttendanceApp from '../layouts/AttendanceApp.vue' 
import AppLogin from '../views/attendance-app/AppLogin.vue'
import ByCode from '../views/attendance-app/ByCode.vue' 
import AnotherOption from '../views/attendance-app/AnotherOption.vue' 
import SuccessPage from '../views/attendance-app/SuccessPage.vue'
 
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
  }, 
  { 
    path: '/attendance-app', 
    name: 'attendanceapp', 
    component: AttendanceApp, 
    children: [ 
      { 
        path: 'app-login', 
        name: 'applogin', 
        component: AppLogin, 
      }, 
      { 
        path: 'by-code', 
        name: 'bycode', 
        component: ByCode, 
      }, 
      { 
        path: 'another-option', 
        name: 'anotheroption', 
        component: AnotherOption, 
      }, 
      { 
        path: 'success-page', 
        name: 'successpage', 
        component: SuccessPage, 
      }, 
    ], 
  } 
  // Additional routes for your application 
]; 
 
const router = createRouter({ 
  history: createWebHistory(), 
  routes, 
}); 
 
export default router;