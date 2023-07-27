import { createRouter, createWebHistory } from "vue-router";

const Coach = () => import("./pages/TheCoach.vue");
const Request = () => import("./pages/TheRequest.vue");
const Contact = () => import("./pages/TheContact.vue");
const CoachDetail = () => import("./components/coach/CoachDetail.vue");
const NotFound = () => import("./pages/NotFound.vue");
const LogIn = () => import("./pages/auth/LogIn.vue");
const Register = () => import("./pages/TheRegister.vue");
const SignUp = () => import("./pages/auth/SignUp.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/coach",
    },
    {
      path: "/auth/login",
      component: LogIn,
      name: "login",
      meta: { requiresUnauth: true },
    },
    {
      path: "/auth/sign-up",
      component: SignUp,
      name: "signup",
      meta: { requiresUnauth: true },
    },
    {
      path: "/coach",
      component: Coach,
      name: "coach",
      // children :[
      //     {
      //         path: ':id',
      //         component : CoachDetail,
      //         name : 'coach-detail'
      //     }
      // ]
    },
    {
      path: "/coach/:id",
      props: true,
      component: CoachDetail,
      name: "coach-detail",
    },
    {
      path: "/coach/register",
      props: true,
      component: Register,
      name: "coach-register",
      meta: { requiresAuth: true },
    },
    {
      path: "/request",
      component: Request,
      name: "request",
      meta : { requiresAuth: true }
    },
    {
      path: "/contact/:id",
      component: Contact,
      name: "contact",
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
      name: "not-found",
    },
  ],
});

router.beforeEach(function (to, _, next) {
  if(to.meta.requiresAuth && !localStorage.getItem('userId') ) {
    next('/auth/login');
  } else if (to.meta.requiresUnauth && localStorage.getItem('userId')) {
    next('/');
  }else {
    next();
  }
});

export default router;
