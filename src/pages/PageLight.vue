<template>
  <page>
    <page-header>
      <template #title>ENERGY MANAGEMENT TOOL</template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-lg q-pr-lg text-brand">
        <!-- Inputs for power consumption, hours used, and quantity -->
        <q-input
          v-model="deviceName"
          label="Device Name"
          filled
          class="q-mb-md text-brand"
        />
        <q-input
          v-model.number="powerConsumption"
          type="number"
          label="Power Consumption (Watts)"
          filled
          class="q-mb-md"
        />
        <q-input
          v-model.number="hoursUsed"
          type="number"
          label="Hours Used per Day"
          filled
          class="q-mb-md"
        />
        <q-input
          v-model.number="quantity"
          type="number"
          label="Quantity"
          filled
          class="q-mb-md"
        />

        <!-- Add Device Button -->
        <q-btn
          @click="addDevice"
          label="Add Device"
          color="info"
          class="q-mb-md"
          flat
        />

        <!-- Device Consumption Table -->
        <h3 class="table-title">Device Consumption Table</h3>
        <div class="table-container">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Device Name</th>
                <th>Power Cons. (Watts)</th>
                <th>Hours Used per Day</th>
                <th>Quantity</th>
                <th>Daily Cons. (kWh)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="device in devices" :key="device.name">
                <td>{{ device.name }}</td>
                <td>{{ device.power }}</td>
                <td>{{ device.hours }}</td>
                <td>{{ device.quantity }}</td>
                <td>{{ device.daily.toFixed(2) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Display total consumption -->
        <div class="q-mb-md">
          <div class="row">
            <div class="">Daily Consumption:</div>
            <div class="q-ml-lg q-mb-sm">{{ totalDailyConsumption }} kWh</div>
          </div>
          <div class="row">
            <div class="">Weekly Consumption:</div>
            <div class="q-ml-lg q-mb-sm">{{ totalWeeklyConsumption }} kWh</div>
          </div>
          <div class="row">
            <div class="">Monthly Consumption:</div>
            <div class="q-ml-lg q-mb-sm">{{ totalMonthlyConsumption }} kWh</div>
          </div>
        </div>

        <!-- Input for remaining units in the token meter -->
        <q-input
          v-model.number="remainingUnits"
          type="number"
          label="Remaining Units in Token Meter"
          filled
          class="q-mb-md"
        />

        <div>
          <p class="q-mb-sm text-gradient">
            Buy ENERGY tokens from a low as 1 shilling.
          </p>
          <q-btn
            to="/profile/payments"
            color="secondary"
            label="BUY TOKENS"
            class="q-mt-md"
            flat
          ></q-btn>
        </div>
      </div>

      <div class="page-body-spacer-footer"></div>
    </page-body>
  </page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "PageLight",
  setup() {
    const deviceName = ref("");
    const powerConsumption = ref(0);
    const hoursUsed = ref(0);
    const quantity = ref(0);
    const remainingUnits = ref(0);
    const devices = ref([]);

    const totalDailyConsumption = computed(() => {
      return devices.value.reduce((sum, device) => sum + device.daily, 0);
    });

    const totalWeeklyConsumption = computed(() => {
      return totalDailyConsumption.value * 7;
    });

    const totalMonthlyConsumption = computed(() => {
      return totalDailyConsumption.value * 30;
    });

    function addDevice() {
      if (
        deviceName.value.trim() &&
        powerConsumption.value > 0 &&
        hoursUsed.value > 0 &&
        quantity.value > 0
      ) {
        const dailyConsumption =
          (powerConsumption.value * hoursUsed.value * quantity.value) / 1000;
        devices.value.push({
          name: deviceName.value,
          power: powerConsumption.value,
          hours: hoursUsed.value,
          quantity: quantity.value,
          daily: dailyConsumption,
        });

        // Reset input fields
        deviceName.value = "";
        powerConsumption.value = 0;
        hoursUsed.value = 0;
        quantity.value = 0;
      }
    }

    return {
      deviceName,
      powerConsumption,
      hoursUsed,
      quantity,
      devices,
      totalDailyConsumption,
      totalWeeklyConsumption,
      totalMonthlyConsumption,
      remainingUnits,
      addDevice,
      selectedTextColor: ref("green"),
    };
  },
});
</script>

<style scoped>
.table-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-align: center;
}

.table-container {
  max-width: 100%;
  overflow-x: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
}

.custom-table th,
.custom-table td {
  padding: 8px 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.custom-table th {
  background-color: #acdbbe;
  color: #333;
}

.custom-table tbody tr:hover {
  background-color: #f9f9f9;
}
.q-input {
  text-decoration-color: aquamarine;
}
</style>
