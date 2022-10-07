<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useTransportationStore } from '@/stores/transportation'

export default {
  name: 'Sidebar',
  computed: {
    ...mapWritableState(useTransportationStore, {
      isLogin: 'isLogin',
      username: 'username'
    })
  },
  methods: {
    ...mapActions(useTransportationStore, {
      getUser: 'getUser'
    }),

    logout() {
      localStorage.clear()
      this.isLogin = false
    }
  },
  created() {
    this.getUser()
    if (localStorage.getItem('access_token')) {
      this.isLogin = true
    }
  }
}
</script>

<template>
  <!-- Sidebar -->
  <div class="row filter-card">
    <div class="filter-area">
      <ul v-if="isLogin" class="list-group list-group-flush">
        <li class="list-group-item">Hello. {{ username }}</li>
        <li class="list-group-item">
          <router-link to="/home">Home</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/wishlist">Wishlist</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/" @click="logout">Logout</router-link>
        </li>
        <li class="list-group-item"></li>
      </ul>

      <ul v-else-if="!isLogin" class="list-group list-group-flush mt-4">
        <li class="list-group-item">
          <router-link to="/home">Home</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/login">Login</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/register">Register</router-link>
        </li>
        <li class="list-group-item"></li>
      </ul>
    </div>
  </div>
</template>

<style>
div.filter-area {
  padding-top: 0;
}
</style>