// src/router.js
import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAdvancedSearch from "./pages/AppAdvancedSearch.vue";
import AppApartmentDetail from "./pages/AppApartmentDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/advanced_search",
      name: "advanced_search",
      component: AppAdvancedSearch,
    },
    {
      path: "/apartment_detail",
      name: "apartment_detail",
      component: AppApartmentDetail,
    },
  ],
});

export { router };
