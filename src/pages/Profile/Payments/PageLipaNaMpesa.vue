<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="mpesa" />
      </template>
      <template #title> LIPA NA MPESA </template>
    </page-header>
    <page-body>
      <div class="constrain q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-sm-8">
            <q-card class="moneypan">
              <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="positive"
                indicator-color="accent"
                align="justify"
                narrow-indicator
              >
                <q-tab name="buygoods" label="Buy Goods" />
                <q-tab name="paybill" label="Paybill" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="buygoods">
                  <plum-buygoods-form-component></plum-buygoods-form-component>
                </q-tab-panel>

                <q-tab-panel name="paybill">
                  <plum-paybill-form-component></plum-paybill-form-component>
                </q-tab-panel>
              </q-tab-panels>
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
import PlumBuygoodsFormComponent from "src/components/PagePlumComponent/PlumBuygoodsFormComponent.vue";
import PlumPaybillFormComponent from "src/components/PagePlumComponent/PlumPaybillFormComponent.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: [
    Page,
    PageHeader,
    PageHeaderButtonBackLeft,
    PlumBuygoodsFormComponent,
    PlumPaybillFormComponent,
  ],
  name: "lipanampesa",
  setup() {
    return {
      tab: ref("buygoods"),
    };
  },
});
</script>
