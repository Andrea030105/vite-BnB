// src/router.js
import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAdvancedSearch from "./pages/AppAdvancedSearch.vue";
import AppApartmentDetail from "./pages/AppApartmentDetail.vue";
import AppAllApartments from "./pages/AppAllApartments.vue";

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
      path: "/apartment_detail/:slug",
      name: "apartment_detail",
      component: AppApartmentDetail,
    },
    {
      path: "/all_apartments",
      name: "all_apartments",
      component: AppAllApartments,
    },
  ],
});

export { router };
