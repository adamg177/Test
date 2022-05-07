import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import Router from 'vue-router';

import AppComponent from '/imports/ui/App.vue';

Meteor.startup(() => {
  Vue.use(VueMeteorTracker);
  Vue.use(Vuetify);
  Vue.use(Router);

  const vuetify = new Vuetify({
    theme: {
      dark: true,
    },
  });

  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Login',
        component: () => import('/imports/ui/components/Login.vue'),
      },
      {
        path: '/Register',
        name: 'Register',
        component: () => import('/client/components/Register.vue'),
      },
      {
        path: '*',
        name: 'notfound',
        component: () => import('/client/components/NotFound.vue'),
      },
    ],
  });

  new Vue({
    render: (h) => h(AppComponent),
    //vuetify,
    router,
  }).$mount('main');
});
