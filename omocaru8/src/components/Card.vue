<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useTransportationStore } from '@/stores/transportation'

export default {
  name: 'Card',
  props: ['transportation', 'bookmark'],
  computed: {
    currency() {
      let price = ''
      if (this.transportation) {
        price = this.transportation.price
      } else if (this.bookmark) {
        price = this.bookmark.Transportation.price
      }
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
    }
  },
  methods: { },
  created() { },

}
</script>

<template>
  <div v-if="transportation" class="card col trans-col" style="width: 17rem;">
    <img :src="transportation.imgUrl"  >
    <div class="card-body">
      <h5 class="card-title">{{ transportation.name }}</h5>
      <p class="card-text">Type: {{ transportation.Type.name }}<br/>Price: {{ currency }}</p>
    </div>
    <a class="btn btn-outline-dark mt-2 btn-sm">Detail</a>
  </div>

  <div v-else-if="bookmark" class="card col trans-col" style="width: 17rem;">
    <img :src="bookmark.Transportation.imgUrl" >
    <div class="card-body">
      <h5 class="card-title">{{ bookmark.Transportation.name }}</h5>
      <p class="card-text"><br/>Price: {{ currency }}</p>
    </div>
  </div>
</template>

<style scoped>
a.btn {
  margin-right: 0;
}

</style>