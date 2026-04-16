<script>
import axios from "axios";

export default {
  data() {
    return {
      apartments: [],
      baseUrl: "http://127.0.0.1:8000",
    };
  },
  methods: {
    getApartments() {
      axios.get(`${this.baseUrl}/api/apartments`).then((response) => {
        console.log(response.data);
        this.apartments = response.data.apartments;
      });
    },
  },
  mounted() {
    this.getApartments();
  },
};
</script>
<template lang="">
  <div class="container-fluid">
    <div class="row">
      <div class="col p-0">
        <div class="container-jumbotron text-center">
          <img src="../assets/images/jumbotron/jumbotron.png" alt="jumbotron" />
          <div class="text-jumbotron">
            <h2>Trova il tuo prossimo soggiorno</h2>
            <div class="search-bar">
              <input
                type="text"
                placeholder="Dove vuoi andare?"
                name=""
                id=""
              />
              <button class="btn btn-small btn-principal">Cerca</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-4">
    <div class="row">
      <div class="col">
        <h2>Apprtamenti in evidenza</h2>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex gap-5 flex-wrap">
        <div v-for="(apartment, index) in apartments" :key="index">
          <div class="card" style="width: 18rem">
            <img :src="`${baseUrl}/storage/${apartment.image}`" alt="Villa" />
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
<style lang="scss">
@use "../styles/partial/variables" as *;
@use "../styles/partial/mixins" as *;

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

.card-body {
  .badge {
    @include badge-card;
  }
  .btn-principal {
    @include btn-login;
  }
}
</style>
