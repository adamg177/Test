import Vue from 'vue';

import '../imports/ui/plugins';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';


import App from '../imports/ui/App.vue';

import VueMeteorTracker from 'vue-meteor-tracker';

import Router from "vue-router";


Vue.use(VueMeteorTracker)



Meteor.startup(() => {
  Vue.use(Router)

 const router = new Router({
   mode: 'history',
   routes: [
     {
    path: '/',
    name: 'Login',
    component: () => import('/imports/ui/components/Login.vue')

  },
  {
    path: '/',
    name: 'Register',
    component: () => import('/imports/ui/components/Register.vue')

  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('/imports/ui/components/NotFoundy.vue')

  },

   ]
 })

  new Vue({
  render:(h) => h(AppComponent),
  router
  })
})
