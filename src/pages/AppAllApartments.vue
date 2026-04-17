<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="container">
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
          <div class="card" style="width: 18rem">
            <img
              :src="`${store.baseUrl}/storage/${apartment.image}`"
              alt="Villa"
            />
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
              <a href="#" class="btn btn-small btn-principal">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
