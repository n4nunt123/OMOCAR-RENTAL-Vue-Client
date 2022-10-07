<script>
import { mapWritableState } from 'pinia'
import { useTransportationStore } from '@/stores/transportation'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'

export default {
  name: 'Landing Page',
  components: { Register, Login },
  data() {
    return {
      flag: false
    }
  },
  computed: {
    ...mapWritableState(useTransportationStore, {
      isLogin: 'isLogin'
    })
  },
  methods: {
    triggerFlag() {
      this.flag = true
    },
    triggerLogin(input) {
      this.$emit('login', input)
    }
  },
  created() {
    if (this.$route.name == 'Register' && this.flag == false) {
      this.flag = true
    } else if (this.$route.name == 'Login' && this.flag == false) {
      this.flag = true
    } 
  },
  watch: {
    "$route.name": {
      handler(value) {
        if (value == 'Landing' && this.flag == true) {
          this.flag = false
        }
      },
      immediate: true
    }
  },
}
</script>

<template>
  <!-- Landing Section -->
  <section class="container login-register-section">
    <div class="row">
      <!-- YADAYADAYADA -->
      <div class="col-md-6 landing-white">
        <h3>OMOCAR RENTAL</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta libero ea quas ad totam eum numquam quod amet iste magnam illum doloribus similique quis a enim dignissimos, hic quaerat sequi culpa optio ex suscipit sit! Iusto alias eligendi veniam debitis a adipisci, temporibus sequi, eius molestias itaque impedit eum aspernatur repudiandae voluptates nulla perspiciatis quibusdam voluptas saepe ad nisi! Commodi error deleniti debitis suscipit consectetur quas libero dolorum fugiat. Officiis officia illo deleniti incidunt hic!</p>
        
        <RouterLink v-if="!isLogin" to="/register" @click="triggerFlag" class="btn btn-outline-dark btn-landing">Register</RouterLink>
        <RouterLink v-if="!isLogin" to="/login" @click="triggerFlag" class="btn btn-outline-dark btn-landing">Login</RouterLink>

      </div>

      <!-- Carousel -->
      <div v-if="!flag" class="col-md-6 landing-dark">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/1.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
              <img src="../assets/2.jpg" class="d-block w-100">
            </div>
            <div class="carousel-item">
              <img src="../assets/3.jpg" class="d-block w-100">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
      <RouterView 
        @login="triggerLogin"
      />
      
    </div>
  </section>
</template>
  