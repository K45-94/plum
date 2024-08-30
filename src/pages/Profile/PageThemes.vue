<template>
  <page :class="backgroundClass">
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="settings" />
      </template>
      <template #title> Theme switcher </template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <div class="q-col-gutter-lg text-secondary">
          <q-option-group
            type="radio"
            v-model="themes"
            :options="select"
            color="secondary"
          />
          <q-space />
          <div class="row q-pt-none">
            <p class="q-mb-none text-secondary">Color</p>
            <q-list class="relative-position">
              <div class="center">
                <q-btn round color="red-10" size="16px" class="q-ma-md" />
                <q-btn round color="pink" size="16px" class="q-ma-md" />
                <q-btn round color="purple" size="16px" class="q-ma-md" />
                <q-btn round color="deep-purple" size="16px" class="q-ma-md" />
                <q-btn round color="blue-grey" size="16px" class="q-ma-md" />
                <q-btn round color="green" size="16px" class="q-ma-md" />
                <q-btn round color="brown-5" size="16px" class="q-ma-md" />
                <q-btn round color="grey" size="16px" class="q-ma-md" />
              </div>
            </q-list>
          </div>

          <q-space />
          <div>
            <p>Change font size</p>
            <q-slider
              v-model="textModel"
              color="secondary"
              markers
              :min="0"
              :max="4"
              marker-labels
              track-size="3px"
              thumb-color="secondary"
            >
              <template v-slot:marker-label-group="{ markerList }">
                <q-icon
                  v-for="val in [0, 4]"
                  :key="val"
                  :class="markerList[val].classes"
                  :style="markerList[val].style"
                  :size="val === 0 ? 'xs' : 'lg'"
                  color="secondary"
                  :name="val === 0 ? 'ti-smallcap' : 'ti-smallcap'"
                  @click="textModel = val"
                />
              </template>
            </q-slider>
          </div>

          <q-space />
          <div>
            <p>Change font weight</p>
            <q-slider
              v-model="fontWeightModel"
              color="secondary"
              markers
              :min="0"
              :max="5"
              marker-labels
              track-size="3px"
              thumb-color="secondary"
            >
              <template v-slot:marker-label-group="{ markerList }">
                <q-icon
                  v-for="val in [0, 5]"
                  :key="val"
                  :class="markerList[val].classes"
                  :style="markerList[val].style"
                  :size="val === 0 ? 'md' : 'md'"
                  color="secondary"
                  :name="val === 0 ? 'ti-smallcap' : 'ti-smallcap'"
                  @click="fontWeightModel = val"
                />
              </template>
            </q-slider>
          </div>
        </div>
      </div>
      <div class="page-body-spacer-footer"></div>
    </page-body>
  </page>
</template>

<script>
import { ref, watch, defineComponent } from "vue";
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageHeaderButtonBackLeft from "src/components/PagePlumComponent/PageHeaderButtonBackLeft.vue";
import store from "src/plumStore";

export default defineComponent({
  components: [Page, PageHeader, PageHeaderButtonBackLeft],
  name: "PageThemes",
  setup() {
    const themes = ref("op2");
    const backgroundClass = ref("");
    const textModel = ref(2); // Default to medium size
    const fontWeightModel = ref(2);

    const select = [
      { label: "Bright background", value: "op1" },
      { label: "Dim background", value: "op2" },
      { label: "Dark background", value: "op3" },
    ];

    // Watch for changes in themes and update the background class
    watch(themes, (newVal) => {
      if (newVal === "op1") {
        backgroundClass.value = "bright-background";
        store.state.theme = "bright-background";
      } else if (newVal === "op2") {
        backgroundClass.value = "dim-background";
        store.state.theme = "dim-background";
      } else if (newVal === "op3") {
        backgroundClass.value = "dark-background";
        store.state.theme = "dark-background";
      }
    });

    // Watcher for textModel to adjust text size
    watch(textModel, (newSize) => {
      const sizeClasses = ["sm", "md", "lg", "xl"];
      const sizeClass = sizeClasses[newSize] || "md"; // Default to 'md'
      document.documentElement.setAttribute("data-text-sizes", sizeClass);
    });

    return {
      themes,
      select,
      textModel,
      fontWeightModel,
      backgroundClass,
    };
  },
});
</script>
