<template>
  <div :class="themeClass">
    <router-view />
  </div>
</template>

<script>
import { computed } from "vue";
import store from "src/plumStore";

export default {
  setup() {
    const themeClass = computed(() => store.state.theme);

    return {
      themeClass,
    };
  },
};
</script>
