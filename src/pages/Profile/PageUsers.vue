<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="profile" />
      </template>
      <template #title> CHATS </template>
    </page-header>
    <page-body>
      <div class="constrain q-pt-lg q-pb-md q-pl-sm q-pr-sm">
        <q-list class="full-width">
          <q-item
            v-for="user in store.state.users"
            :key="user.id"
            :to="`/profile/users/${user.id}`"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white">
                {{ user.name.charAt(0) }}
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label
                class="text-subtitle2 text-weight-bold text-gradient"
                >{{ user.name }}</q-item-label
              >
              <q-item-label caption lines="2" class="text-secondary">{{
                user.chat
              }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-badge rounded :color="user.online ? 'positive' : 'negative'" />
            </q-item-section>
          </q-item>

          <q-page-sticky position="bottom-right" :offset="[20, 60]">
            <q-btn fab icon="add" color="primary" />
          </q-page-sticky>
        </q-list>
      </div>
      <div class="page-body-spacer-footer"></div>
    </page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageHeaderButtonBackLeft from "src/components/PagePlumComponent/PageHeaderButtonBackLeft.vue";
import store from "src/plumStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: [Page, PageHeader, PageHeaderButtonBackLeft],
  name: "PageUsers",
  data() {
    return {
      store,
    };
  },
});
</script>
