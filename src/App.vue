<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
<template lang="">
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>
<style lang="scss">
@use "./styles/generals.scss" as *;
</style>
