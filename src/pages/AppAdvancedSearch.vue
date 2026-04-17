<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      filterApartment: [],
      address: "",
      rooms: "",
      bedrooms: "",
      bathrooms: "",
      squareMeters: "",
      price: "",
    };
  },
  methods: {
    getApartmentFilter() {
      this.filterApartment = store.apartments.filter((element) => {
        return (
          (!this.address ||
            element.address
              .toLowerCase()
              .includes(this.address.toLowerCase())) &&
          (!this.rooms || element.rooms >= Number(this.rooms)) &&
          (!this.bedrooms || element.bedrooms >= Number(this.bedrooms)) &&
          (!this.bathrooms || element.bathrooms >= Number(this.bathrooms)) &&
          (!this.square_meters ||
            element.square_meters >= Number(this.square_meters)) &&
          (!this.price || element.price_per_night <= Number(this.price))
        );
      });
    },
  },
};
</script>
<template>
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col">
        <h2 class="fs-1 text-center">Filtri</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="filter-container mx-5 my-4">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Indirizzo"
              v-model="address"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"
              ><i class="fa-solid fa-door-open"></i
            ></span>
            <input
              min="1"
              type="number"
              class="form-control"
              placeholder="Stanze"
              v-model="rooms"
            />
            <span class="input-group-text ms-3" id="basic-addon1">
              <i class="fa-solid fa-bed"></i>
            </span>
            <input
              min="1"
              type="number"
              class="form-control"
              placeholder="Camere da letto"
              v-model="bedrooms"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"
              ><i class="fa-solid fa-bath"></i>
            </span>
            <input
              min="1"
              type="number"
              class="form-control"
              placeholder="Bagni"
              v-model="bathrooms"
            />
            <span class="input-group-text ms-3" id="basic-addon1">
              <i class="fa-solid fa-ruler-combined"></i>
            </span>
            <input
              min="30"
              type="number"
              class="form-control"
              placeholder="Metri Quadrati"
              v-model="squareMeters"
            />
          </div>
          <div class="d-flex justify-content-center">
            <div class="input-group mb-3 flex-nowrap w-50">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa-solid fa-euro-sign"></i>
              </span>
              <div class="form-control d-flex align-items-center">
                <small class="mx-1">0</small>
                <input
                  type="range"
                  class="form-range"
                  id="price_range"
                  min="0"
                  max="1000"
                  step="10"
                  v-model="price"
                />
                <small class="mx-2" v-if="price === ''">1000</small>
                <small class="mx-2" v-else>{{ price }}</small>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button
              class="btn btn-principal w-25"
              @click="getApartmentFilter()"
            >
              Applica Filtri
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Dopo l'applicazione dei filtri -->

  <div class="container" v-if="filterApartment.length != 0">
    <div class="row">
      <div class="col d-flex gap-5 flex-wrap justify-content-center">
        <div v-for="(apartment, index) in filterApartment" :key="index">
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
              <a href="#" class="btn btn-principal">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use "../styles/partial/mixins" as *;
@use "../styles/partial/variables" as *;
.btn-principal {
  @include btn-login;
}
</style>
