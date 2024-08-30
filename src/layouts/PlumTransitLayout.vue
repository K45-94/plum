<template>
  <q-layout view="lHh lpr lFf lHr lpR fFf" class="shadow-2">
    <q-header>
      <q-toolbar>
        <q-btn
          @click="toggleLeftDrawer"
          color="secondary"
          flat
          rounded
          dense
          no-caps
          icon="eva-menu-2-outline"
        />
        <q-toolbar-title
          class="page-header-title q-pl-none text-weight-light text-white text-body1"
          >COMMUTE</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-footer class="small-screen-only" bordered>
      <q-tabs class="row text-white" active-color="secondary">
        <q-route-tab
          v-for="navItem in store.state.navItems"
          :key="navItem.root"
          :to="navItem.to"
          :icon="navItem.icon"
          class="col"
        />
      </q-tabs>
    </q-footer>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay persistent>
      <q-header>
        <q-toolbar>
          <q-toolbar-title
            class="page-header-title q-pl-none text-weight-light text-white text-body1"
          >
            PLAN
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-scroll-area class="fit q-pa-sm">
        <div class="page-body-spacer-header-constrained"></div>
        <q-list>
          <q-input
            class="q-ma-sm"
            color="secondary"
            bottom-slots
            @blur="originKey += 1"
            v-model="origin"
            placeholder="Origin"
            clearable
          >
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:hint> Starting point - enter an address </template>
          </q-input>

          <q-separator class="q-my-lg" inset />

          <q-input
            class="q-ma-sm"
            color="secondary"
            @blur="destinationKey += 1"
            bottom-slots
            v-model="destination"
            placeholder="Destination"
            clearable
          >
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>

            <template v-slot:hint>
              Final destination - enter an address
            </template>
          </q-input>
          <div class="row justify-center">
            <q-btn
              class="fit q-ma-sm"
              color="primary"
              label="Create Route"
              @click="createRoute"
            />
          </div>
          <div class="row justify-center">
            <q-btn
              class="fit q-ma-sm"
              color="primary"
              label="Reset"
              @click="reset"
            />
          </div>
          <div class="q-ma-sm text-h5">route info space</div>
        </q-list>
      </q-scroll-area>
      <q-footer><q-toolbar> </q-toolbar></q-footer>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import store from "src/plumStore";
import { ref } from "vue";

export default {
  name: "PlumTransitLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      store,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="scss">
.q-header {
  height: 51px;
}
.q-footer {
  background: linear-gradient(90deg, #000c04 15%, rgb(0, 0, 0) 85%);
  height: 50px;
}
.q-drawer {
  background: linear-gradient(90deg, #000c04 15%, rgb(0, 0, 0) 85%);
}
</style>
