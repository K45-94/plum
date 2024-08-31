<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="payments" />
      </template>
      <template #title> PAYPAL MONEY </template>
    </page-header>
    <page-body>
      <div class="constrain q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-sm-8">
            <q-list class="full-width">
              <q-item
                to="/profile/payments/paypalwallet/sendpaypalmoney"
                clickable
              >
                <q-item-section avatar class="col-4">
                  <q-avatar color="primary"> PL </q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center"
                    >Send From PayPal</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-4">
                  <q-btn
                    to="/profile/payments/paypalwallet/sendpaypalmoney"
                    class="absolute-right"
                    icon="eva-arrow-ios-forward-outline"
                    flat
                    dense
                    color="secondary"
                  />
                </q-item-section>
              </q-item>

              <q-space class="q-pa-sm" />
              <q-item to="" clickable>
                <q-item-section avatar class="col-4">
                  <q-avatar color="primary"> PL </q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center"
                    >Pay with PayPal</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-4">
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
              <q-space class="q-pa-sm" />
              <q-item to="" clickable>
                <q-item-section avatar class="col-4">
                  <q-avatar color="primary"> B </q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center"
                    >PayPal Balance</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-4">
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
            </q-list>
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
  name: "paypalwallet",
});
</script>
