<template>
  <div
    class="fullscreen bg-green text-black text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 15vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. No Plums here...</div>
      <div>
        <page-button-back label="Go Home" />
      </div>
    </div>
  </div>
</template>

<script>
import PageButtonBack from "src/components/PagePlumComponent/PageButtonBack.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: [PageButtonBack],
  name: "Error404",
});
</script>
