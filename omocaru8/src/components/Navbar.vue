<script>

export default {
  name: 'Navigation Bar'
}
</script>

<template>
  <!-- Navbar -->
  <section class="container-fluid" id="nav">
    <nav class="navbar bg-dark sticky-top flex-md-nowrap p-0 shadow">
      <div class="container-fluid row">
        <div class="col">
          <router-link to="/" class="navbar-brand col" href="#">
            <img src="https://cdn.discordapp.com/attachments/1007286935926095954/1011903660055343204/OMOCAT_Logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
            OMOCAR RENTAL
          </router-link>
        </div>
        <div class="col-md-auto">
          <router-link to="/home" class="btn-nav">Home</router-link>
        </div>
        <div class="col-md-auto">
          <router-link to="/" class="btn-nav">About Us</router-link>
        </div>
      </div>
    </nav>
  </section>
</template>

<style>
</style>