<template>
  <q-btn
    @click="useGoBack"
    icon="chevron_left"
    color="secondary"
    flat
    rounded
    dense
    no-caps
  />
</template>

<script>
import useGoBack from "src/use/useGoBack";
export default {
  name: "PageHeaderButtonBackLeft",
  setup() {
    return {
      useGoBack,
    };
  },
};
</script>
