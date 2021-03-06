import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/twitch',
      name: 'twitch',
      component: () => import(/* webpackChunkName: "twitch" */ './views/Twitch.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "test" */ './views/Test.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import(/* webpackChunkName: "todo" */ './views/ToDo.vue')
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      component: () => import(/* webpackChunkName: "sandbox" */ './views/Sandbox.vue')
    },
    {
      path: '/guessWord',
      name: 'guessWord',
      component: () => import(/* webpackChunkName: "guessWord" */ './views/GuessWord.vue')
    }
  ]
})
