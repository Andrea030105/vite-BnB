<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template lang="">
  <div class="card" style="width: 18rem">
    <img :src="`${store.baseUrl}/storage/${apartment.image}`" alt="Villa" />
    <div class="card-body">
      <h5 class="card-title">{{ apartment.title }}</h5>
      <ul class="list-unstyled">
        <div class="my-2">
          <label><strong>Metri Quadrati:</strong></label>
          <li class="badge mx-1">{{ apartment.square_meters }}</li>
        </div>
        <div class="my-2">
          <label><strong>Stanze:</strong></label>
          <li class="badge mx-1">{{ apartment.rooms }}</li>
        </div>
        <div class="my-2">
          <label><strong>Camera/e da letto:</strong></label>
          <li class="badge mx-1">{{ apartment.bedrooms }}</li>
        </div>
        <div class="my-2">
          <label><strong>Bagni:</strong></label>
          <li class="badge mx-1">{{ apartment.bathrooms }}</li>
        </div>
      </ul>
      <h5>Prezzo a notte:</h5>
      <div>
        <p class="badge mx-1">
          {{ apartment.price_per_night }}
          <i class="fa-solid fa-euro-sign"></i>
        </p>
      </div>
      <router-link
        class="btn btn-principal"
        :to="{ name: 'apartment_detail', params: { slug: apartment.slug } }"
        >Vedi Appartamento</router-link
      >
    </div>
  </div>
</template>
<style lang=""></style>
