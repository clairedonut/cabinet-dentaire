import Vue from 'vue'
import Router from 'vue-router'
import About from '../About'
import Home from '../Home'
import Urgences from '../Urgences'
import Prestations from '../Prestations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/prestations',
      name: 'Prestations',
      component: Prestations
    },
    {
      path: '/urgences',
      name: 'Urgences',
      component: Urgences
    }
  ],
  mode: 'history'
})
