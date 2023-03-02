import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import newUser from '../views/newUser.vue'
import userDetails from '../views/userDetails.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/newUser',
      name: 'newUser',
      component: newUser
    },
    {
      path: '/user/:id',
      name: 'userDetails',
      component: userDetails,
      props: true
    }
    
  ]
})

export default router
