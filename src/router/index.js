import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import Form from "@/components/Form";
import Login from "@/components/Login";

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
