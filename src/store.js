import { reactive } from "vue";

export const store = reactive({
  apartments:
    [] /* Array per recuperare tutti gli appartamenti dal BackOffice */,
  baseUrl: "http://127.0.0.1:8000" /* Url base per accedere al BackOffice */,
});
