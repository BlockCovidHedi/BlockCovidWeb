import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import Form from "@/components/Form";
import Login from "@/components/Login";
import Connected from "@/components/Connected";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Connexion',
    component: Login

  },
  {
    path: '/signup',
    name: 'Inscription',
    component: Form
  },
  {
    path: '/connected',
    name: 'Connecté',
    component: Connected
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=> {
  const publicPages = ['/signin', '/signup', '/']
  const authRequired = !publicPages.includes(to.path);
  const authNonRequired = publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user');

  if(authRequired && !loggedIn) {
    return next('/signin')
  }
  if(authNonRequired && loggedIn) {
    return next('/connected')
  }
  next();
})

export default router
