import { createRouter, createWebHistory } from 'vue-router'; 
 
import Auth from '../layouts/AuthLayout.vue'; 
import Login from '../views/auth/LoginView.vue'; 
import AttendanceMachine from '../layouts/AttendanceMachine.vue' 
import MachineLogin from '../views/attendance-machine/MachineLogin.vue'
import ById from '../views/attendance-machine/ById.vue' 
import ByCode from '../views/attendance-machine/ByCode.vue' 
import AnotherOption from '../views/attendance-machine/AnotherOption.vue' 
import SuccessPage from '../views/attendance-machine/SuccessPage.vue'
import MyAttendance from '../views/main/MyAttendance.vue'
 
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
    ], 
  }, 
  { 
    path: '/', 
    name: 'main', 
    component: Main, 
    children: [ 
      { 
        path: 'my-attendance', 
        name: 'myattendance', 
        component: MyAttendance, 
      }, 
    ],
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