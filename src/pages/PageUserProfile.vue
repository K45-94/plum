<template>
  <page>
    <page-header>
      <template #button-left>
        <page-button-back label="feeds" />
      </template>

      <template #title> USER-ID </template></page-header
    >
    <page-body>
      <div class="page-body-spacer-user-posts"></div>
      <div class="row q-pl-sm q-pr-sm">
        <q-img
          v-for="feeds in store.state.feeds"
          :key="feeds.id"
          :src="feeds.url"
          :ratio="1"
          class="col-6 shadow-20"
        />
      </div>
      <div class="page-body-spacer-footer"></div>

      <q-page-sticky position="top" :offset="[0, 0]">
        <div class="page-body-spacer-header-constrained"></div>
        <div class="q-pt-none q-pb-sm q-pl-none q-pr-none row">
          <q-card class="q-pl-sm q-pr-sm col-12 q-mt-none q-pb-md" flat>
            <q-card-section class="q-pt-xs q-pl-xs q-pr-xs q-pb-xs" vertical>
              <q-card-section class="q-pt-xs q-pl-none q-pr-none q-pb-none">
                <q-item class="q-pt-xs q-pl-none q-pr-none q-pb-none" to="">
                  <q-item-section avatar>
                    <q-btn round to="">
                      <q-avatar>
                        <img src="/images/7.jpg" />
                      </q-avatar>
                    </q-btn>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label class="text-bold text-green"
                      >Plum Account</q-item-label
                    >
                    <q-item-label caption class="text-gradient">
                      post location
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="" clickable class="q-pa-none">
                  <div class="text-gradient">
                    A microblogging platform with very minimal user
                    interactions. No like buttons, no reposts/retweets.
                    Propaganda or fake news can be limited because posts are not
                    supposed to go viral.
                  </div></q-item
                >
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </q-page-sticky>
    </page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageButtonBack from "src/components/PagePlumComponent/PageButtonBack.vue";
import store from "src/plumStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Page, PageHeader, PageButtonBack },
  name: "PageUserProfile",
  setup() {
    return {
      store,
    };
  },
});
</script>

<style lang="scss">
.q-card {
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
</style>
