<script>
import ApartmentCard from "../components/ApartmentCard.vue";
import { store } from "../store";

export default {
  components: { ApartmentCard },
  data() {
    return {
      store,
      findApartmantsFilter: [],
      home_search: "",
      noResultsMessage: "",
      hasSearched: false,
    };
  },
  methods: {
    getSearch() {
      this.noResultsMessage = "";

      if (!this.home_search.trim()) {
        this.findApartmantsFilter = [];
        this.hasSearched = false;
        return;
      }

      this.hasSearched = true;

      this.findApartmantsFilter = store.apartments.filter(
        (element) =>
          element.title
            .toLowerCase()
            .includes(this.home_search.toLowerCase()) ||
          element.address
            .toLowerCase()
            .includes(this.home_search.toLowerCase()),
      );

      if (this.findApartmantsFilter.length === 0) {
        this.noResultsMessage = "Nessun appartamento trovato";
      }
    },
  },
};
</script>

<template>
  <div class="container-jumbotron text-center">
    <img src="../assets/images/jumbotron/jumbotron.png" alt="jumbotron" />
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
        <button class="btn btn-principal" @click="getSearch()">Cerca</button>
      </div>
    </div>
  </div>

  <div class="bg-gray d-flex align-items-center">
    <div class="container">
      <div class="row py-4">
        <div class="col text-center text-capitalize">
          <h2
            class="fs-1"
            v-if="hasSearched == false && noResultsMessage == ''"
          >
            Appartamenti Sponsorizzati
          </h2>
        </div>
      </div>

      <!-- CASO 1: nessuna ricerca → mostra sponsorizzati -->
      <div class="row" v-if="!hasSearched">
        <div class="col d-flex gap-5 flex-wrap justify-content-center">
          <div v-for="(apartment, index) in store.apartments" :key="index">
            <ApartmentCard
              :apartment="apartment"
              v-if="apartment.sponsors.length !== 0"
            />
          </div>
        </div>
      </div>

      <!-- CASO 2: ha cercato ma non trova nulla -->
      <div class="row" v-else-if="hasSearched && noResultsMessage">
        <div class="col text-center text-danger fs-2 py-4">
          <i class="fa-solid fa-x"></i> {{ noResultsMessage }}
        </div>
      </div>

      <!-- CASO 3: ha cercato e trova risultati -->
      <div class="row" v-else>
        <div class="col d-flex gap-5 flex-wrap justify-content-center">
          <div v-for="(apartment, index) in findApartmantsFilter" :key="index">
            <ApartmentCard :apartment="apartment" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partial/variables" as *;
@use "../styles/partial/mixins" as *;

.container-jumbotron {
  height: calc(100vh - 100px);
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  .text-jumbotron {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 1;
    width: 60%;

    .search-bar {
      background-color: $clGray;
      border-radius: 20px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;

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

      .btn-principal {
        width: 120px;
        height: 50px;
        font-size: 1.3rem;
        @include btn-login;
      }
    }

    h2 {
      font-size: 4rem;
      margin-bottom: 3rem;
      color: white;
      text-align: center;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
  }
}

.bg-gray {
  height: calc(100vh - 100px);
}
</style>
