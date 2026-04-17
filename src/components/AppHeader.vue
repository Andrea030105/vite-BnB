<script>
export default {
  data() {
    return {};
  },
};
</script>
<template lang="">
  <nav class="navbar navbar-expand-lg navbar-header">
    <div class="container-fluid text-center">
      <router-link class="navbar-brand logo" :to="{ name: 'home' }">
        <img src="../assets/images/loghi/Logo_Completo.svg" alt="Logo" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse flex-grow-0"
        id="navbarSupportedContent"
      >
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
            <router-link :to="{ name: 'all_apartments' }" class="nav-link"
              >Appartamenti</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item m-1">
            <a class="btn btn-principal" href="http://127.0.0.1:8000/login"
              >Login</a
            >
          </li>
          <li class="nav-item m-1">
            <a class="btn btn-principal" href="http://127.0.0.1:8000/register"
              >Registrati</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
@use "../styles/partial/variables" as *;
@use "../styles/partial/mixins" as *;
.navbar-header {
  background-color: $clWhite;
  color: $clBlack;
  font-weight: bolder;
  .logo {
    width: 100px;
  }
  .btn-principal {
    @include btn-login;
  }
}
</style>
