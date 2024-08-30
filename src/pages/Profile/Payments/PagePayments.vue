<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="profile" />
      </template>
      <template #title> PAYMENTS </template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <div class="col-12 col-sm-8">
          <q-list class="full-width">
            <q-item to="/profile/payments/mpesawallet" clickable>
              <q-item-section avatar class="col-4">
                <q-avatar color="primary" text-color="secondary"> M </q-avatar>
              </q-item-section>
              <q-item-section class="col-4">
                <q-item-label class="text-bold absolute-center text-secondary"
                  >Mpesa</q-item-label
                >
              </q-item-section>
              <q-item-section class="col-4">
                <q-btn
                  to="/profile/payments/mpesawallet"
                  class="absolute-right"
                  icon="eva-arrow-ios-forward-outline"
                  flat
                  dense
                  color="secondary"
                >
                  <q-badge color="secondary" floating>5</q-badge>
                </q-btn>
              </q-item-section>
            </q-item>
            <q-space class="q-pa-sm" />
            <q-item to="/profile/payments/airtelwallet" clickable>
              <q-item-section avatar class="col-4">
                <q-avatar color="primary" text-color="secondary"> A </q-avatar>
              </q-item-section>
              <q-item-section class="col-4">
                <q-item-label class="text-bold absolute-center text-secondary"
                  >Airtel Money</q-item-label
                >
              </q-item-section>
              <q-item-section class="col-4">
                <q-btn
                  to="/profile/payments/airtelwallet"
                  class="absolute-right"
                  icon="eva-arrow-ios-forward-outline"
                  flat
                  dense
                  color="secondary"
                />
              </q-item-section>
            </q-item>
            <q-space class="q-pa-sm" />
            <q-item to="/profile/payments/telkomwallet" clickable>
              <q-item-section avatar class="col-4">
                <q-avatar color="primary" text-color="secondary"> T </q-avatar>
              </q-item-section>
              <q-item-section class="col-4">
                <q-item-label class="text-bold absolute-center text-secondary"
                  >T-kash</q-item-label
                >
              </q-item-section>
              <q-item-section class="col-4">
                <q-btn
                  to="/profile/payments/telkomwallet"
                  class="absolute-right"
                  icon="eva-arrow-ios-forward-outline"
                  flat
                  dense
                  color="secondary"
                />
              </q-item-section>
            </q-item>
            <q-space class="q-pa-sm" />
            <q-item to="/profile/payments/paypalwallet" clickable>
              <q-item-section avatar class="col-4">
                <q-avatar color="primary" text-color="secondary"> PP </q-avatar>
              </q-item-section>
              <q-item-section class="col-4">
                <q-item-label class="text-bold absolute-center text-secondary"
                  >PayPal</q-item-label
                >
              </q-item-section>
              <q-item-section class="col-4">
                <q-btn
                  to="/profile/payments/paypalwallet"
                  class="absolute-right"
                  icon="eva-arrow-ios-forward-outline"
                  flat
                  dense
                  color="secondary"
                >
                  <q-badge color="blue" floating>3</q-badge>
                </q-btn>
              </q-item-section>
            </q-item>

            <q-space class="q-pa-sm" />
            <q-item to="/profile/payments/pesalinkwallet" clickable>
              <q-item-section avatar class="col-4">
                <q-avatar color="primary" text-color="secondary"> P </q-avatar>
              </q-item-section>
              <q-item-section class="col-4">
                <q-item-label class="text-bold absolute-center text-secondary"
                  >Pesalink</q-item-label
                >
              </q-item-section>
              <q-item-section class="col-4">
                <q-btn
                  to="/profile/payments/pesalinkwallet"
                  class="absolute-right"
                  icon="eva-arrow-ios-forward-outline"
                  flat
                  dense
                  color="secondary"
                >
                  <q-badge color="orange" floating>2</q-badge>
                </q-btn>
              </q-item-section>
            </q-item>
          </q-list>
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
  name: "PagePayments",
});
</script>
