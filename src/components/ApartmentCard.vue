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
  <div class="card effects-apartments" style="width: 18rem">
    <img :src="`${store.baseUrl}/storage/${apartment.image}`" alt="Villa" />
    <div class="card-body">
      <h5 class="card-title">{{ apartment.title }}</h5>
      <ul class="list-unstyled">
        <div class="my-2">
          <label><strong>Metri Quadrati:</strong></label>
          <li class="badge badge-gray mx-1">
            {{ apartment.square_meters }}
          </li>
        </div>
        <div class="my-2">
          <label><strong>Stanze:</strong></label>
          <li class="badge badge-gray mx-1">{{ apartment.rooms }}</li>
        </div>
        <div class="my-2">
          <label><strong>Camera/e da letto:</strong></label>
          <li class="badge badge-gray mx-1">{{ apartment.bedrooms }}</li>
        </div>
        <div class="my-2">
          <label><strong>Bagni:</strong></label>
          <li class="badge badge-gray mx-1">
            {{ apartment.bathrooms }}
          </li>
        </div>
      </ul>
      <div>
        <p class="badge badge-red">
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
<style lang="scss">
@use "../styles/partial/mixins" as *;
@use "../styles/partial/variables" as *;
.effects-apartments {
  box-shadow: 0 0.5rem 1rem rgba(black, 0.75);
  &:hover {
    transform: translateY(-4px);
  }
  img {
    height: 220px;
    object-fit: cover;
  }
  .badge-gray {
    @include badge-card-gray;
  }
}
</style>
