<script>
import Sidebar from '../components/Sidebar.vue'
import Card from '../components/Card.vue'
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useTransportationStore } from '@/stores/transportation'

export default {
  name: 'Wishlist Page',
  components: { Sidebar, Card },
  computed: { 
    ...mapState(useTransportationStore, {
      listBookmark: 'listBookmark'
    })
  },
  methods: {
    ...mapActions(useTransportationStore, {
      getDetail: 'getDetail',
      getBookmark: 'getBookmark'
    }),

    async eventDetail(id) {
      this.getDetail(id)
    }
  },
  created() {
    this.getBookmark()
  }
}
</script>

<template>
  <!-- Wishlist Section -->
  <section class="container wishlist-section">
    <h3 id="title-trans">Wishlist</h3>
    <div id="card-wishlist">

      <!-- Card -->
      <div class="row three-by-three">
        <Card 
          v-for="bookmark in listBookmark" 
          :key="bookmark.id"
          :bookmark="bookmark"

          @click="eventDetail(bookmark.Transportation.id)"
        />
      </div>
  
      <!-- Sidebar -->
      <Sidebar />

    </div>
  </section>
</template>

<style>
</style>