<script>
import axios from "axios";
import { store } from "../store";
import AppMap from "../components/AppMap.vue";

export default {
  components: { AppMap },
  data() {
    return {
      store,
      apartment: [],
    };
  },
  mounted() {
    axios
      .get(`${store.baseUrl}/api/apartments/${this.$route.params.slug}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          this.apartment = response.data.apartment;
        } else {
          // redirect alla pagina 404
          this.$router.push({ name: "not-found" });
        }
      });
  },
};
</script>
<template>
  <div class="bg-gray">
    <div class="container py-4">
      <div class="row">
        <div class="col text-center">
          <h2 class="fs-1 my-3 ms-3 text-capitalize">{{ apartment.title }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <img
            :src="`${store.baseUrl}/storage/${apartment.image}`"
            alt="img-apartmnet"
            class="img-detail"
          />
        </div>
        <div class="col-6 py-3">
          <div class="row">
            <div class="col">
              <h4><strong>Descrizione:</strong></h4>
              <p>
                {{ apartment.description }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h4><strong>Servizi:</strong></h4>
              <div class="my-2 d-flex align-items-center flex-wrap">
                <span
                  v-for="(service, index) in apartment.services"
                  :key="index"
                  class="badge mx-1"
                >
                  {{ service.name }}
                </span>
              </div>
            </div>
          </div>
          <div class="row my-3">
            <div class="col">
              <div class="d-flex justify-content-between align-items-center">
                <h4><strong>Info:</strong></h4>
                <div
                  class="badge d-flex justify-content-around align-items-center"
                >
                  <i class="fa-solid fa-ruler-combined"></i>
                  <p class="">{{ apartment.square_meters }} mq</p>
                </div>
                <div
                  class="badge d-flex justify-content-around align-items-center"
                >
                  <i class="fa-solid fa-door-open"></i>
                  <p class="">{{ apartment.rooms }} Stanze</p>
                </div>
                <div
                  class="badge d-flex justify-content-around align-items-center"
                >
                  <i class="fa-solid fa-bed"></i>
                  <p class="">{{ apartment.bedrooms }} Letti</p>
                </div>
                <div
                  class="badge d-flex justify-content-around align-items-center"
                >
                  <i class="fa-solid fa-bath"></i>
                  <p class="">{{ apartment.bathrooms }} Bagni</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="d-flex align-items-center">
                <h4><strong>Prezzo:</strong></h4>
                <div class="price mx-3">
                  <span class="fs-3">
                    <strong>
                      {{ apartment.price_per_night }}
                    </strong>
                  </span>
                  <i class="fa-solid fa-euro-sign fs-4"></i>
                  <span class="fs-3 night">/</span>
                  <span class="night fs-5"><strong>Notte</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col">
          <h4><strong>Dove ti troverai:</strong></h4>
          <div class="map">
            <AppMap
              v-if="apartment.latitude && apartment.longitude"
              :lat="apartment.latitude"
              :lng="apartment.longitude"
            />
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
  .img-detail {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center;
    border: 2px solid black;
  }
  .badge {
    @include badge-card;
    p {
      margin: 0 1rem;
    }
  }
  .price {
    color: $clRed;
    .night {
      color: $clBlack;
    }
  }
  .map {
    border: 2px solid black;
  }
}
</style>
