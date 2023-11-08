import { createRouter, createWebHistory } from 'vue-router'; 
 
import Auth from '../layouts/AuthLayout.vue'; 
import Login from '../views/auth/LoginView.vue'; 
import ForgotPassword from '../views/auth/ForgotPassword.vue'; 
import ResetPassword from '../views/auth/ResetPassword.vue'; 
import RegistrationView from '../views/auth/RegistrationView.vue'; 
import AttendanceMachine from '../layouts/AttendanceMachine.vue' 
import MachineLogin from '../views/attendance-machine/MachineLogin.vue'
import ById from '../views/attendance-machine/ById.vue' 
import ByCode from '../views/attendance-machine/ByCode.vue' 
import AnotherOption from '../views/attendance-machine/AnotherOption.vue' 
import SuccessPage from '../views/attendance-machine/SuccessPage.vue'
 
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
    path: '/attendance-machine', 
    name: 'attendancemachine', 
    component: AttendanceMachine, 
    children: [ 
      { 
        path: 'machine-login', 
        name: 'machinelogin', 
        component: MachineLogin, 
      }, 
      { 
        path: 'by-id', 
        name: 'byid', 
        component: ById, 
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