<template>
  <v-app>
    <v-container>

      <header>
        <router-link to="/">
          Navigation
        </router-link>
        <router-link to="/about">
          About
        </router-link>
      </header>

      <router-view v-if="user" />
    </v-container>
  </v-app>
</template>



<script>
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    Tracker.autorun(() => {
      this.user = Meteor.user();
      console.log(this.user);
    });
  },
};
</script>


<style scoped>

</style>