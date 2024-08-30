<template>
  <page>
    <plum-header-search>
      <q-input v-model="text" input-class="text-right" class="q-ml-md">
        <template v-slot:append>
          <q-icon v-if="text === ''" name="eva-search" />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="text = ''"
          />
        </template>
      </q-input>
    </plum-header-search>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-md q-pr-md text-gradient">
        <p v-for="i in 30" :key="i">
          Building Plum with vue 3. This app is getting complex and I thought I
          could redesign and rebuild it better with Vue 3 Finally found a way
          for nesting child pages in routes.
        </p>
      </div>

      <div class="page-body-spacer-footer"></div>
    </page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import PlumHeaderSearch from "src/components/PagePlumComponent/PlumHeaderSearch.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { Page, PlumHeaderSearch },
  name: "PageSearch",
  setup() {
    return {
      text: ref(""),
    };
  },
});
</script>
