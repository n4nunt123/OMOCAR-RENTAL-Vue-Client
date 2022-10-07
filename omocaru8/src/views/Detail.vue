<script>
import Sidebar from '../components/Sidebar.vue'
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useTransportationStore } from '@/stores/transportation'

export default {
  name: 'Detail Page',
  components: { Sidebar },
  computed: {
    currency() {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.detailTransportation.price)
    },
    ...mapState(useTransportationStore, { 
      detailTransportation: 'detailTransportation',
      isLogin: 'isLogin',
      qr: 'qr'
    })
  },
  methods: {
    ...mapActions(useTransportationStore, {
      getDetail: 'getDetail',
      addBookmark: 'addBookmark',
      getQR: 'getQR'
    }),

    async addWishlist() {
      this.addBookmark(this.$route.params.id)
    }
  },
  created() { 
    const url = new URL(location.href)
    this.getQR(url)
  },
  watch: {
    "$route.params.id": {
      handler(value) {
        this.getDetail(value)
      },
      immediate: true
    }
  }
}
</script>

<template>
  <!-- Transportation Section -->
  <section class="container transportation-section">
    <h3 id="title-trans">{{ detailTransportation.name }}</h3>
    <div id="card-transportation">

      <!-- Card -->
      <div class="row">
        <div class="card card-detail">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <p class="card-text">{{ detailTransportation.description }}<br/><br/>Type: {{ detailTransportation.typeName }}<br/>Price: {{ currency }}</p>
                <a v-if="isLogin" @click.prevent="addWishlist" class="btn btn-outline-primary mt-2"><p class="card-text">Add Wishlist</p></a>
              </div>
              <div class="col">
                <img :src="qr.qrcode" id="qr-code">
              </div>
              <img :src="detailTransportation.imgUrl">
            </div>
          </div>
        </div>
      </div>
  
      <!-- Sidebar -->
      <Sidebar />

    </div>
  </section>
</template>

<style scoped>
img#qr-code {
  margin: auto;
}
</style>