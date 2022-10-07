<script>
import axios from 'axios'
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useTransportationStore } from '@/stores/transportation'

export default {
  name: 'Login',
  data() {
    return {
      input: { email: '', password: '' }
    }
  },
  computed: {
    ...mapState(useTransportationStore, {
      baseUrl: 'baseUrl'
    })
  },
  methods: { 
    ...mapActions(useTransportationStore, {
      login: 'login',
    }),

    async eventLogin() {
      this.login(this.input)
      this.input.email = ''
      this.input.password = ''
    }
  }
}
</script>

<template>
  <!-- Login -->
  <div class="col-md-6" id="login">
    <h3>Login</h3>

    <form @submit.prevent="eventLogin">
      <div class="form-group mb-4">
        <div class="d-flex justify-content-between">
          <label class="text-black" for="login-email">Email:</label>
          <label class="text-danger text-end fw-bold">*</label>
        </div>
        <input v-model="input.email" name="email" id="login-email" class="form-control" placeholder="Input your email here..." autocomplete="off">
      </div>

      <div class="form-group mb-4">
        <div class="d-flex justify-content-between">
          <label class="text-black" for="login-password">Password:</label>
          <label class="text-danger text-end fw-bold">*</label>
        </div>
        <input v-model="input.password" type="password" name="password" id="login-password" class="form-control" placeholder="Input your password here..." autocomplete="off">
      </div>

      <button class="btn-login btn-login-stripe w-100 mt-3" id="login-button" type="submit">LOGIN</button>

    </form>
  </div>
</template>

<style>
</style>