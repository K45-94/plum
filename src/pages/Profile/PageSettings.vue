<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="profile" />
      </template>
      <template #title> SETTINGS </template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-sm-8">
            <q-card flat>
              <q-item>
                <q-item-section class="col-6">
                  <q-item-label class="text-bold center-left text-secondary"
                    >Notifications</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-6">
                  <q-toggle
                    :label="NotificationsToggle"
                    color="secondary"
                    false-value="Off"
                    true-value="On"
                    v-model="NotificationsToggle"
                    class="absolute-right text-caption"
                  />
                </q-item-section>
              </q-item>
            </q-card>
            <q-space class="q-pa-sm" />
            <q-card flat>
              <q-item>
                <q-item-section class="col-6">
                  <q-item-label class="text-bold center-left text-secondary"
                    >Security</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-6">
                  <q-btn
                    to=""
                    class="absolute-right"
                    icon="eva-arrow-ios-forward-outline"
                    flat
                    dense
                    color="secondary"
                  />
                </q-item-section>
              </q-item>
            </q-card>
            <q-space class="q-pa-sm" />
            <q-card flat>
              <q-item to="/profile/settings/themes">
                <q-item-section class="col-6">
                  <q-item-label class="text-bold center-left text-secondary"
                    >Display</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-6">
                  <q-btn
                    to="/profile/settings/themes"
                    class="absolute-right"
                    icon="eva-arrow-ios-forward-outline"
                    flat
                    dense
                    color="secondary"
                  />
                </q-item-section>
              </q-item>
            </q-card>
            <q-space class="q-pa-sm" />
            <q-card flat>
              <q-item>
                <q-item-section class="col-6">
                  <q-item-label class="text-bold center-left text-secondary"
                    >Help n Support</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-6">
                  <q-btn
                    to=""
                    class="absolute-right"
                    icon="eva-arrow-ios-forward-outline"
                    flat
                    dense
                    color="secondary"
                  />
                </q-item-section>
              </q-item>
            </q-card>
            <q-space class="q-pa-sm" />
            <q-card flat>
              <q-item>
                <q-item-section class="col-6">
                  <q-item-label class="text-bold center-left text-secondary"
                    >About Plum</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-6">
                  <q-btn
                    to=""
                    class="absolute-right"
                    icon="eva-arrow-ios-forward-outline"
                    flat
                    dense
                    color="secondary"
                  />
                </q-item-section>
              </q-item>
            </q-card>
          </div>
        </div>
      </div>
      <div class="page-body-spacer-footer"></div>
    </page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageHeaderButtonBackLeft from "src/components/PagePlumComponent/PageHeaderButtonBackLeft.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: [Page, PageHeader, PageHeaderButtonBackLeft],
  name: "PageSettings",
  data() {
    return {
      accounts: [
        {
          id: 1,
          name: "Plum Account",
          Tel: "0727256611",
          Email: "plumuser@plumaccount.com",
          Status: true,
        },
      ],
      NotificationsToggle: "Off",
    };
  },
});
</script>

<style lang="scss">
.q-card {
  border-radius: 0;
}
</style>
