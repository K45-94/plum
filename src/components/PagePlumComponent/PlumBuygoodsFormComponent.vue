<template>
  <q-form>
    <q-input
      v-model="formData.tillNumber"
      class="q-mb-md"
      outlined
      type="number"
      label="Till Number"
    />
    <q-input
      v-if="tab == 'paybill'"
      v-model="formData.paybillNumber"
      class="q-mb-md"
      outlined
      type="number"
      label="Paybill Number"
    />
    <q-input
      v-if="tab == 'paybill'"
      v-model="formData.accountNumber"
      class="q-mb-md"
      outlined
      type="number"
      label="Account Number"
    />
    <q-input
      v-model="formData.amount"
      class="q-mb-md"
      outlined
      type="number"
      label="Amount"
    />
    <div class="row">
      <q-space />
      <q-btn color="primary" class="" @click="submitForm" label="pay amount" />
    </div>
  </q-form>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PlumBuygoodsFormComponent",

  setup() {
    return {
      tab: ref("buygoods"),
    };
  },
  data() {
    return {
      formData: {
        tillNumber: "",
        amount: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Buy Goods");
    },
  },
};
</script>

<style lang="scss"></style>
