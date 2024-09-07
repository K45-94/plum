<template>
  <page>
    <page-header>
      <template #title>Find Artisans</template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-md q-pr-md text-brand">
        <!-- Dropdowns for filters -->
        <q-select
          v-model="selectedCraft"
          :options="craftOptions"
          label="Select Craft"
          filled
        />
        <q-select
          v-model="selectedCounty"
          :options="countyOptions"
          label="Select County"
          filled
        />
        <q-select
          v-model="selectedConstituency"
          :options="constituencyOptions"
          label="Select Constituency"
          filled
          :disable="!selectedCounty"
        />

        <!-- List of artisans with a reveal button -->
        <q-card class="q-my-md" flat>
          <q-card-section
            v-for="artisan in filteredArtisans"
            :key="artisan.id"
            clickable
            class="q-item q-item-type row q-link cursor-pointer q-focusable q-hoverable"
          >
            <!-- Artisan details -->
            <q-card class="" flat>
              <q-card-section class="col-8">
                <q-item-label>{{ artisan.name }}</q-item-label>
                <q-item-label>{{ artisan.craft }}</q-item-label>
                <q-item-label
                  >{{ artisan.county }} - {{ artisan.location }}</q-item-label
                >
              </q-card-section>
            </q-card>

            <q-btn
              @click="revealContact(artisan)"
              label="Contact"
              color="info"
              flat
              class="col-4"
            />

            <!-- Conditionally display the contact info -->
            <q-card class="row" flat>
              <q-card-section v-if="artisan.showContact" class="col-12">
                <q-item-label>Phone: {{ artisan.phone }}</q-item-label>
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>
      </div>
    </page-body>
  </page>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import store from "src/plumStore"; // Reverting to the original store import

defineOptions({
  name: "PageArtisans",
});

const selectedCraft = ref("");
const selectedCounty = ref("");
const selectedConstituency = ref("");

const craftOptions = [
  { label: "Plumber", value: "Plumber" },
  { label: "Electrician", value: "Electrician" },
  { label: "Mechanic", value: "Mechanic" },
  { label: "Chef", value: "Chef" },
  { label: "Cleaner", value: "Cleaner" },
  { label: "Helper", value: "Helper" },
  // ... other crafts
];

const countyOptions = computed(() =>
  store.state.locations.map((location) => ({
    label: location.name,
    value: location.name,
  })),
);

const constituencyOptions = ref([]);

watch(selectedCounty, (newVal) => {
  if (newVal) {
    const selectedLocation = store.state.locations.find(
      (location) => location.name === newVal.value,
    );
    if (selectedLocation) {
      constituencyOptions.value = selectedLocation.constituencies.map(
        (constituency) => ({
          label: constituency,
          value: constituency,
        }),
      );
    } else {
      constituencyOptions.value = [];
    }
  } else {
    constituencyOptions.value = [];
  }
});

const filteredArtisans = computed(() => {
  const filtered = store.state.artisans.filter((artisan) => {
    const matchesCraft = selectedCraft.value
      ? artisan.craft === selectedCraft.value.value
      : true;

    const matchesCounty = selectedCounty.value
      ? artisan.county === selectedCounty.value.value
      : true;

    const matchesConstituency = selectedConstituency.value
      ? artisan.location === selectedConstituency.value.value
      : true;

    return matchesCraft && matchesCounty && matchesConstituency;
  });

  return filtered;
});

function revealContact(artisan) {
  artisan.showContact = !artisan.showContact; // Toggle visibility
}
</script>
