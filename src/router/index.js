import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import Form from "@/components/Form";
import Connected from "@/components/Connected";
import About from "@/components/About";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/about',
    name: 'A propos',
    component: About

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=> {
  const publicPages = ['/signup', '/', '/about']
  const authRequired = !publicPages.includes(to.path);
  const authNonRequired = publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if(authRequired && !loggedIn) {
    return next('/')
  }
  if(authNonRequired && loggedIn) {
    return next('/connected')
  }
  next();
})

export default router
