<script>
import Sidebar from '../components/Sidebar.vue'
import Card from '../components/Card.vue'
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useTransportationStore } from '@/stores/transportation'

export default {
  name: 'Home Page',
  data() {
    return {
      currentPage: 1,
      nameSearch: ''
    }
  },
  computed: {
    ...mapWritableState(useTransportationStore, { 
      transportations: 'transportations',
    })
  },

  components: { Sidebar, Card },

  methods: {
    ...mapActions(useTransportationStore, {
      getDetail: 'getDetail',
      getTransportations: 'getTransportations'
    }),

    async triggerDetail(id) {
      this.getDetail(id)
    },

    async triggerPagination(page) {
      this.currentPage = page
      if (this.currentPage < 1) {
        this.currentPage = 1
      } else if (this.currentPage > this.transportations.totalPage) {
        this.currentPage = this.transportations.totalPage
        this.getTransportations(this.transportations.totalPage, this.nameSearch)
      } else {
        this.getTransportations(page, this.nameSearch)
      }
    },

    async triggerSearch() {
      this.getTransportations(1, this.nameSearch)
    }
  },

  created() {
    this.getTransportations()
  }
}
</script>

<template>
  <!-- Transportation Section -->
  <section class="container transportation-section">
    <h3 id="title-trans">Transportations</h3>
    <nav>
      
      <div class="input-group mb-3">
        <form @submit.prevent="triggerSearch" >
          <input v-model="nameSearch" type="search" class="form-control rounded" placeholder="Search.." />
        </form>
      </div>

      <ul class="pagination">
        <li class="page-item"><a @click.prevent="triggerPagination(currentPage-1)" class="page-link" href="#">Previous</a></li>
        <li v-for="page in transportations.totalPage" class="page-item"><a @click.prevent="triggerPagination(page)" class="page-link" >{{ page }}</a></li>
        <li class="page-item"><a @click.prevent="triggerPagination(currentPage+1)" class="page-link" >Next</a></li>
      </ul>
    </nav>
    <div id="card-transportation">

      <!-- Card -->
      <div class="row three-by-three">
        <Card 
          v-for="transportation in transportations.rows" 
          :key="transportation.id"
          :transportation="transportation"

          @click="triggerDetail(transportation.id)"
        />
      </div>
  
      <!-- Sidebar -->
      <Sidebar />

    </div>
  </section>
</template>

<style>
div.three-by-three {
  cursor: pointer;
}
a.page-link {
  color: black;
  cursor: pointer;
}
</style>