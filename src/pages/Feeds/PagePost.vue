<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="feeds" />
      </template>
      <template #title> POST </template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-md q-pr-md">
        <div v-if="feed">
          <q-img
            :src="feed.url"
            no-spinner
            no-transition
            class="no-pointer-events"
          />
          <div class="q-pt-md q-pb-md q-pl-none q-pr-none">
            <div class="text-h5 q-mb-md">{{ feed.caption }}</div>
            <p v-for="i in 5" :key="i" class="text-gradient">
              Building Plum with vue 3. This app is getting complex and I
              thought I could redesign and rebuild it better with Vue 3 Finally
              found a way for nesting child pages in routes.
            </p>
          </div>
          <div class="text-white">
            <plum-application-btn
              @click="userProfileView"
            ></plum-application-btn>
          </div>
        </div>
      </div>
      <div class="page-body-spacer-footer"></div>
    </page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeaderButtonBackLeft from "src/components/PagePlumComponent/PageHeaderButtonBackLeft.vue";
import PlumApplicationBtn from "src/components/PagePlumComponent/PlumApplicationBtn.vue";
import { onActivated, onDeactivated, ref } from "vue";
import { useRoute } from "vue-router";
import store from "src/plumStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Page, PageHeaderButtonBackLeft, PlumApplicationBtn },
  name: "PagePost",
  setup() {
    let feed = ref();
    onActivated(() => {
      let route = useRoute();

      feed.value = store.getters.getFeed(route.params.id);
    });

    onDeactivated(() => {
      feed.value = null;
    });
    return {
      store,
      feed,
    };
  },
  methods: {
    userProfileView() {
      console.log("Application successfully sent");
    },
  },
});
</script>
