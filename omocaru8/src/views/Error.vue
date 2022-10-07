<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: '404 NOT FOUND',
  components: { Sidebar }
}
</script>

<template>
  <!-- Transportation Section -->
  <section class="container transportation-section">
    <h3 id="title-trans"></h3>
    <div id="card-transportation">

      <!-- Card -->
      <div class="row">
        <div class="card card-detail">
          <div class="card-body text-center">
            <h1>ERROR 404: PAGE NOT FOUND</h1>
            <img src="../assets/AW3925002_22.gif" alt="YOU'RE NOT SUPPOSED TO BE HERE">
          </div>
        </div>
      </div>
  
      <!-- Sidebar -->
      <Sidebar />

    </div>
  </section>
</template>

<style>
div.text-center h1 {
  margin: auto;
  padding: 10px;
}
</style>