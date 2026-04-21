<script>
import ApartmentCard from "../components/ApartmentCard.vue";
import { store } from "../store";
import axios from "axios";

export default {
  components: { ApartmentCard },
  data() {
    return {
      store,
      findApartmantsFilter: [],
      home_search: "",
    };
  },
  methods: {
    getSearch() {
      this.findApartmantsFilter = store.apartments.filter(
        (element) =>
          element.title
            .toLowerCase()
            .includes(this.home_search.toLowerCase()) ||
          element.address
            .toLowerCase()
            .includes(this.home_search.toLowerCase()),
      );
    },
  },
};
</script>
<template>
  <div class="bg-gray">
    <div class="container-fluid">
      <div class="row">
        <div class="col p-0">
          <div class="container-jumbotron text-center">
            <img
              src="../assets/images/jumbotron/jumbotron.png"
              alt="jumbotron"
            />
            <div class="text-jumbotron">
              <h2>Trova il tuo prossimo soggiorno</h2>
              <div class="search-bar">
                <input
                  v-model="home_search"
                  type="text"
                  placeholder="Dove vuoi andare?"
                  name="home_search"
                  id="home_search"
                  @keyup.enter="getSearch()"
                />
                <button class="btn btn-principal" @click="getSearch()">
                  Cerca
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-4">
      <div class="row my-4">
        <div class="col">
          <h2 class="fs-1">Apprtamenti in evidenza</h2>
        </div>
      </div>

      <!-- Se non cerchi nulla ti fa vedere quelli in primo piano -->

      <div class="row" v-if="findApartmantsFilter.length === 0">
        <div class="col d-flex gap-5 flex-wrap justify-content-center">
          <div v-for="(apartment, index) in store.apartments" :key="index">
            <ApartmentCard :apartment="apartment" />
          </div>
        </div>
      </div>

      <!-- Se cerchi qualcosa -->

      <div class="row">
        <div class="col d-flex gap-5 flex-wrap justify-content-center">
          <div v-for="(apartment, index) in findApartmantsFilter" :key="index">
            <ApartmentCard :apartment="apartment" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use "../styles/partial/variables" as *;
@use "../styles/partial/mixins" as *;
.bg-gray {
  background-color: $clGray;
  .container-jumbotron {
    height: 30rem;
    width: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
    .btn-principal {
      @include btn-login;
    }

    .text-jumbotron {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);

      .search-bar {
        background-color: $clGray;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input {
          width: 100%;
          border: none;
          padding: 10px;
          margin-right: 1rem;
          background-color: $clGray;
          &:focus-visible {
            outline: none;
          }
        }
        button {
          width: 120px;
          height: 50px;
          font-size: 1.3rem;
        }
      }

      h2 {
        font-size: 4rem;
        margin-bottom: 3rem;
      }
    }
  }

  .card {
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      object-position: center;
    }
    .card-body {
      .badge {
        @include badge-card;
      }
      .btn-principal {
        @include btn-login;
      }
    }
  }
}
</style>
