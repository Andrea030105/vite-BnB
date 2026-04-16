<script>
export default {};
</script>
<template lang="">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'home' }">BnB</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'advanced_search' }" class="nav-link"
              >Ricerca Avanzata</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'apartment_detail' }" class="nav-link"
              >Appartamenti</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang=""></style>
