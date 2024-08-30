<template>
  <q-layout
    :class="themeClass"
    view="lHh lpR fFf"
    class="shadow-2 rounded-borders"
  >
    <q-page-container>
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

      <!-- Conditionally render based on route -->
      <div v-if="!isChildPageActive">
        <!-- Render the parent component here if no child page is active -->
        <!-- Add your parent content here -->
      </div>

      <router-view v-slot="{ Component }">
        <keep-alive><component :is="Component" /></keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { computed } from "vue";
import store from "src/plumStore";

export default {
  setup() {
    const themeClass = computed(() => store.state.theme);

    // Check if the current route is a child page
    const isChildPageActive = computed(() => {
      const routeName = store.state.currentRouteName;
      return [
        "PageFeeds",
        "PagePost",
        "PageSearch",
        "PageCamera",
        "PageUserProfile",
        "PageProfile",
        "Users",
        "Chat",
        "PageSettings",
        "PageThemes",
        "Payments",
        "mpesawallet",
        "sendmpesa",
        "lipanampesa",
        "airtelwallet",
        "sendairtelmoney",
        "telkomwallet",
        "sendtelkommoney",
        "paypalwallet",
        "sendpaypalmoney",
        "pesalinkwallet",
        "sendpesalinkmoney",
      ].includes(routeName);
    });

    return {
      store,
      themeClass,
      isChildPageActive,
    };
  },
};
</script>
