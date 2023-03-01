import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import newUserView from '../views/newUserView.vue'
import userDetails from '../views/userDetailsView.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/newUser',
      name: 'newUser',
      component: newUserView
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
