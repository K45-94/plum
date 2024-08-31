<template>
  <q-form>
    <q-input
      v-model="formData.paybillNumber"
      class="q-mb-md"
      outlined
      type="number"
      label="Paybill Number"
    />
    <q-input
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
  name: "PlumPayMoneyFormComponent",

  setup() {
    return {
      tab: ref("paybill"),
    };
  },
  data() {
    return {
      formData: {
        paybillNumber: "",
        accountNumber: "",
        amount: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Paybill");
    },
  },
};
</script>
