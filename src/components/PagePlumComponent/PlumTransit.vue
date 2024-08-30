<template>
  <div id="map" class="window-height">
    <plum-transit-search
      :city="city"
      @cityFound="handleSearchResult"
      :apikey="apikey"
    />
  </div>
</template>

<script>
export default {
  name: "PlumTransit",
  props: ["city", "apikey"],
  methods: {
    initMap() {
      var options = {
        zoom: 13,
        center: { lat: -1.2833, lng: 36.8167 },
      };
    },
  },
  mounted() {
    tt.map({
      container: "map",
      key: this.apikey,
    });
  },
  data() {
    return {
      ttmap: undefined,
    };
  },
};
</script>
