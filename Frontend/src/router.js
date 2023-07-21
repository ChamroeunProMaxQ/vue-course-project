import { createRouter , createWebHistory } from 'vue-router'
import Coach from './pages/TheCoach.vue'
import Request from './pages/TheRequest.vue'
import Contact from './pages/TheContact.vue'
import CoachDetail from './components/coach/CoachDetail.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect : '/coach',
    
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

export default router;