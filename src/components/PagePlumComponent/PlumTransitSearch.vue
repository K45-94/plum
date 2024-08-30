<script>
export default {
  name: "PlumTransitSearch",
  props: ["city", "apikey"],
  mounted() {
    const _this = this;
    tt.services
      .fuzzySearch({
        key: this.apikey,
        query: this.city,
      })
      .then(function (response) {
        console.log(response);
        _this.$emit("cityFound", response.results[0].position);
        _this.cityName = response.results[0].address.freeformAddress;
        response.results[0].address.country;
      });
  },
};
</script>
