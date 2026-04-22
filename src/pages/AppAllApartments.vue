<script>
import axios from "axios";
import { store } from "../store";
import ApartmentCard from "../components/ApartmentCard.vue";

export default {
  components: {
    ApartmentCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="bg-gray py-5">
    <div class="container py-4">
      <div class="row">
        <div class="col">
          <div class="text-center my-5">
            <h2 class="fs-1">Tutti i nostri appartamenti</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex gap-5 flex-wrap justify-content-center">
          <div v-for="(apartment, index) in store.apartments" :key="index">
            <ApartmentCard :apartment="apartment" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use "../styles/partial/mixins" as *;
@use "../styles/partial/variables" as *;
.bg-gray {
  background-color: $clGray;
}
</style>
