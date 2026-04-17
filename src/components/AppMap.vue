<script>
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

export default {
  props: {
    // Le props non hanno type: Number perché Laravel le manda come stringhe
    // Le convertiamo noi con parseFloat() dentro initMap()
    lat: { required: true },
    lng: { required: true },
  },

  mounted() {
    // Appena il componente è montato nel DOM, inizializziamo la mappa
    this.initMap();
  },

  methods: {
    initMap() {
      // Convertiamo le coordinate da stringa a numero decimale
      const lat = parseFloat(this.lat);
      const lng = parseFloat(this.lng);

      // Se le coordinate non sono valide (es. undefined o null),
      // usciamo subito senza inizializzare la mappa
      if (isNaN(lat) || isNaN(lng)) return;

      // Leggiamo la chiave API TomTom dal file .env
      // La variabile DEVE iniziare con VITE_ per essere esposta da Vite
      const key = import.meta.env.VITE_TOMTOM_KEY;

      // Salviamo l'istanza della mappa su this._map (con il trattino basso)
      // e NON dentro data() — questo è fondamentale:
      // se la mettessimo in data(), Vue la avvolgerebbe nel suo Proxy reattivo
      // e TomTom non riuscirebbe a leggere correttamente le sue proprietà interne,
      // causando l'errore "get on proxy: property __om is read-only"
      this._map = tt.map({
        key: key,
        container: this.$refs.mapContainer, // il div nel template con ref="mapContainer"
        center: [lng, lat], // TomTom vuole [lng, lat] e NON [lat, lng]
        zoom: 16,
        // Stile satellite ibrido: immagini reali + strade + punti di interesse
        // Usiamo l'URL HTTPS completo perché il protocollo "tomtom://"
        // non è supportato in questa versione del SDK web
        style: `https://api.tomtom.com/style/1/style/*?map=2/basic_street-satellite&poi=2/poi_dynamic-satellite&key=${key}`,
      });

      // Aspettiamo che la mappa sia completamente caricata prima di aggiungere il marker
      // Se aggiungessimo il marker subito (fuori dall'evento "load"),
      // TomTom va in conflitto con il Proxy di Vue causando un altro errore
      this._map.on("load", () => {
        new tt.Marker()
          .setLngLat([lng, lat]) // posizione del marker
          .addTo(this._map); // lo aggiungiamo alla mappa tramite this._map diretto
      });
    },
  },

  beforeUnmount() {
    // Quando il componente viene distrutto (es. cambio pagina),
    // rimuoviamo la mappa per liberare memoria e canvas WebGL
    if (this._map) {
      this._map.remove();
      this._map = null;
    }
  },
};
</script>

<template>
  <!--
    ref="mapContainer" è il riferimento al div DOM che TomTom usa come contenitore.
    Altezza fissa necessaria: senza height la mappa non si vede.
  -->
  <div ref="mapContainer" style="width: 100%; height: 400px"></div>
</template>
