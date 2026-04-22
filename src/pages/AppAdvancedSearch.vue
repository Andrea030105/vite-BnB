<script>
import axios from "axios";
import { store } from "../store";
import ApartmentCard from "../components/ApartmentCard.vue";

export default {
  components: { ApartmentCard },
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
      hasFiltered: false,
    };
  },
  methods: {
    getApartmentFilter() {
      this.hasFiltered = true;
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
  <div class="bg-gray py-4">
    <div class="container-fluid py-4">
      <div class="row">
        <!-- SIDEBAR FILTRI -->
        <div class="col-12 col-lg-3">
          <div
            @keyup.enter="getApartmentFilter()"
            class="card p-3 sticky-top"
            style="top: 20px"
          >
            <h5 class="mb-3">Filtri</h5>

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
              <div class="input-group mb-3 flex-nowrap">
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
                class="btn btn-principal w-100"
                @click="getApartmentFilter()"
              >
                Applica Filtri
              </button>
            </div>
          </div>
        </div>

        <!-- RISULTATI FILTRATI -->
        <div class="col-12 col-lg-9" v-if="filterApartment.length != 0">
          <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
            <div v-for="(apartment, index) in filterApartment" :key="index">
              <ApartmentCard :apartment="apartment" />
            </div>
          </div>
        </div>

        <div
          class="col-12 col-lg-9 d-flex align-items-center justify-content-center"
          v-else-if="hasFiltered"
        >
          <div class="row text-danger">
            <h2><i class="fa-solid fa-x"></i> Nessun Risultato trovato</h2>
          </div>
        </div>

        <!-- RISULTATI NON FILTRATI -->
        <div class="col-12 col-lg-9" v-else>
          <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
            <div v-for="(apartment, index) in store.apartments" :key="index">
              <ApartmentCard :apartment="apartment" />
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
.bg-gray {
  background-color: $clGray;
  height: calc(100vh - 100px);
  .vh-filter {
    height: calc(100vh - 100px);
  }
  .btn-principal {
    @include btn-login;
  }
}
</style>
