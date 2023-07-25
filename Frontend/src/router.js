import { createRouter , createWebHistory } from 'vue-router'
import Coach from './pages/TheCoach.vue'
import Request from './pages/TheRequest.vue'
import Contact from './pages/TheContact.vue'
import CoachDetail from './components/coach/CoachDetail.vue'
import NotFound from './pages/NotFound.vue'
import LogIn from './pages/auth/LogIn.vue'
import Register from './pages/TheRegister.vue'
import SignUp from './pages/auth/SignUp.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect : '/coach',
        },
        {
            path: '/auth/login',
            component : LogIn,
            name : 'login',
            meta : { requiresUnauth : true }
        },
        {
            path: '/auth/sign-up',
            component : SignUp,
            name : 'signup',
            meta : { requiresUnauth : true }
        },
        {
            path: '/coach', 
            component : Coach,
            name : 'coach',
            // children :[
            //     {
            //         path: ':id',
            //         component : CoachDetail,
            //         name : 'coach-detail'
            //     }
            // ]
        },
        {
            path: '/coach/:id',
            props : true,
            component : CoachDetail,
            name : 'coach-detail'
        },
        {
            path: '/coach/register',
            props : true,
            component : Register,
            name : 'coach-register',
            meta : { requiresAuth : true }
        },
        {
            path: '/request',
            component : Request,
            name : 'request'
        },
        {
            path: '/contact/:id',
            component : Contact,
            name : 'contact'
        },
        {
            path: '/:notFound(.*)',
            component : NotFound,
            name : 'not-found'
        }
    ],
});

router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !localStorage.getItem('userId')) {
      next('/auth/login');
    } else if (to.meta.requiresUnauth && !!localStorage.getItem('userId')) {
      console.log(to);
      next('/');
    } else {
      console.log(to.meta, !!localStorage.getItem('userId'));
      next();
    }
  })

export default router;