<template>
  <page>
    <page-header>
      <template #title> PLUM </template>
    </page-header>
    <page-body
      ><div class="q-pt-sm q-pb-sm q-pl-none q-pr-none row">
        <q-card
          class="post col-11 q-ma-xs q-pb-md"
          v-for="feeds in store.state.feeds"
          :key="[feeds.id][feeds.name]"
          flat
        >
          <q-card-section
            class="q-pt-xs q-pl-none q-pr-none q-pb-none"
            vertical
          >
            <q-card-section class="q-pt-xs q-pl-none q-pr-none q-pb-none">
              <q-item
                class="q-pt-xs q-pl-none q-pr-none q-pb-none"
                :to="`/${feeds.name}`"
              >
                <q-item-section avatar>
                  <q-btn round :to="`/${feeds.name}`">
                    <q-avatar>
                      <img :src="feeds.url" />
                    </q-avatar>
                  </q-btn>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-bold text-gradient">{{
                    feeds.accountName
                  }}</q-item-label>
                  <q-item-label caption> {{ feeds.location }} </q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                :to="`/feeds/${feeds.id}`"
                clickable
                class="q-pt-sm q-pl-none q-pr-none q-pl-none q-pb-none"
              >
                <div class="text-gradient">
                  {{ feeds.post }}
                </div></q-item
              >
            </q-card-section>
            <q-card-section class="col-7 q-pt-md q-pl-none q-pr-none q-pb-none"
              ><router-link :to="`/feeds/${feeds.id}`">
                <q-img
                  :src="feeds.url"
                  :ratio="4.5 / 3"
                  class="shadow-24"
                /> </router-link></q-card-section
          ></q-card-section>
        </q-card>
      </div>
      <div class="page-body-spacer-footer"></div>
    </page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import store from "src/plumStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Page },
  name: "PageFeeds",
  setup() {
    return {
      store,
    };
  },
});
</script>
<style lang="scss">
.post {
  position: relative;
  left: 49%;
  transform: translateX(-49.7%);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
.q-card {
  background: linear-gradient(90deg, #000c0400 15%, rgba(0, 0, 0, 0) 85%);
}
</style>
