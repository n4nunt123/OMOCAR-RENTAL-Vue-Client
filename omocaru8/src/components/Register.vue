<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useTransportationStore } from '@/stores/transportation'

export default {
  name: 'Register',
  data() {
    return {
      input: {
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
      }
    }
  },
  methods: { 
    ...mapActions(useTransportationStore, {
      register: 'register'
    }),

    async eventRegister() {
      this.register(this.input)
    }
  },

}
</script>

<template>
  <!-- Register -->
  <div class="col-md-6" id="register">
    <h3>Register Account</h3>

    <form @submit.prevent="eventRegister">
      <div class="form-group mb-3 mb-3">
        <div class="d-flex justify-content-between">
          <label class="text-white" for="register-username">Username:</label>
          <label class="text-white text-end fw-bold">*</label>
        </div>
        <input v-model="input.username" type="text" name="username" id="register-username" class="form-control" placeholder="Input your username here..." autocomplete="off">
      </div>
        
      <div class="form-group mb-3">
        <div class="d-flex justify-content-between">
          <label class="text-white" for="register-email">Email:</label>
          <label class="text-white text-end fw-bold">*</label>
        </div>
        <input v-model="input.email" type="email" name="email" id="register-email" class="form-control" placeholder="Input your email here..." autocomplete="off">
      </div>

      <div class="form-group mb-3">
        <div class="d-flex justify-content-between">
          <label class="text-white" for="register-password">Password:</label>
          <label class="text-white text-end fw-bold">*</label>
        </div>
        <input v-model="input.password" type="password" name="password" id="register-password" class="form-control" placeholder="Input your password here..." autocomplete="off">
      </div>

      <div class="form-group mb-3">
        <div class="d-flex justify-content-between">
          <label class="text-white" for="register-phoneNumber">Phone Number:</label>
          <label class="text-white text-end fw-bold">*</label>
        </div>
        <input v-model="input.phoneNumber" type="text" name="phoneNumber" id="register-phoneNumber" class="form-control" placeholder="Input your phone number here... (optional)" autocomplete="off" min="0">
      </div>

      <div class="form-group mb-3">
        <div class="d-flex justify-content-between">
          <label class="text-white" for="register-address">Address:</label>
          <label class="text-white text-end fw-bold">*</label>
        </div>
        <textarea v-model="input.address" name="address" id="register-address" class="form-control" placeholder="Input your address here... (optional)" autocomplete="off" rows="3"></textarea>
      </div>
      
      <button class="btn-register btn-register-stripe w-100" id="register-button" type="submit">REGISTER</button>

    </form>
  </div>
</template>

<style>
</style>