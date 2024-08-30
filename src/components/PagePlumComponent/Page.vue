<template>
  <div class="page absolute-top fit shadow-10">
    <div
      v-touch-swipe.mouse.right="useGoBack"
      class="page-nudger fit"
      :class="{ 'nudge-left': hasActiveChildPage }"
    >
      <slot />
    </div>
    <router-view v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated slideInRight slow"
        leave-active-class="animated slideOutRight slow"
      >
        <keep-alive>
          <component
            @pageActivated="hasActiveChildPage = true"
            @pageDeactivated="hasActiveChildPage = false"
            :is="Component"
          />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { ref, onActivated, onDeactivated } from "vue";

import store from "src/plumStore";
import useGoBack from "src/use/useGoBack";
export default {
  name: "Page",
  setup(props, { emit }) {
    let hasActiveChildPage = ref(false);
    onActivated(() => {
      emit("pageActivated");
    });

    onDeactivated(() => {
      emit("pageDeactivated");
    });
    return {
      store,
      hasActiveChildPage,
      useGoBack,
    };
  },
};
</script>
