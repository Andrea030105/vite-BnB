<script>
import { store } from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: { AppHeader, AppFooter },
  mounted() {
    axios.get(`${store.baseUrl}/api/apartments`).then((response) => {
      store.apartments = response.data.apartments;
    });
  },
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>
<style lang="scss">
@use "./styles/generals.scss" as *;
</style>
