import Quotes from "./components/Quotes";
import NewQuote from "./components/NewQuote";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./components/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        name: 'quotes',
        component: Quotes
      },
      {
        path: '/new-quote',
        component: NewQuote
      },
    ]
  },

  {path: '*', redirect: '/'}
];
const router = new VueRouter({
    mode: 'history',
    routes
  }
);

router.beforeEach((to, from, next) => {
  const publicPages = ['/signin', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/signin');
  }

  next();
});
export default router;
