import { createRouter, createWebHistory } from 'vue-router'; 
 
import Auth from '../layouts/AuthLayout.vue'; 
import Login from '../views/auth/LoginView.vue'; 
import AttendanceMachine from '../layouts/AttendanceMachine.vue' 
import MachineLogin from '../views/attendance-machine/MachineLogin.vue'
import ById from '../views/attendance-machine/ById.vue' 
import ByCode from '../views/attendance-machine/ByCode.vue' 
import AnotherOption from '../views/attendance-machine/AnotherOption.vue' 
import SuccessPage from '../views/attendance-machine/SuccessPage.vue'
import StudentDashboard from '../layouts/StudentDashboard.vue'  
import MyAttendanceReport from '../views/dashboard/student/MyAttendanceReport'
import TeacherDashboard from '../layouts/TeacherDashboard.vue'
import StudentAttendanceReport from '../views/dashboard/teacher/StudentAttendanceReport.vue'

const routes = [ 
  { 
    path: '/', 
    name: 'auth', 
    component: Auth, 
    children: [ 
      { 
        path: '', 
        name: 'login', 
        component: Login, 
      }, 
    ], 
  }, 
  { 
    path: '/student-dashboard', 
    name: 'student_dashboard', 
    component: StudentDashboard, 
    children: [ 
      { 
        path: 'my-attendance-report', 
        name: 'my_attendance_report', 
        component: MyAttendanceReport, 
      }, 
    ],
  }, 
  { 
    path: '/teacher-dashboard', 
    name: 'teacher_dashboard', 
    component: TeacherDashboard, 
    children: [ 
      { 
        path: 'student-attendance-report', 
        name: 'student_attendance_report', 
        component: StudentAttendanceReport, 
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