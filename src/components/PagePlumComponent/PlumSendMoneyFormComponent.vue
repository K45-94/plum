<template>
  <q-form>
    <q-input
      v-model="formData.phoneNumber"
      class="q-mb-md"
      outlined
      type="number"
      label="Phone Number"
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
      <q-btn
        color="primary"
        class="text-secondary"
        @click="submitForm"
        label="send money"
      />
    </div>
  </q-form>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PlumSendMoneyFormComponent",

  setup() {
    return {
      tab: ref("sendmoney"),
    };
  },
  data() {
    return {
      formData: {
        phoneNumber: "",
        amount: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.tab == "sendmoney") {
        console.log("Send Money");
      } else {
        console.log("Other Network");
      }
    },
  },
};
</script>
