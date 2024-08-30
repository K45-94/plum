<template>
  <page>
    <page-header>
      <template #title> PROFILE </template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-md q-pr-md">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-sm-8">
            <q-card flat>
              <q-item v-for="account in accounts" :key="account.id">
                <q-item-section avatar>
                  <q-avatar color="primary" text-color="secondary">
                    {{ account.name.charAt(0) }}
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-secondary">
                  <q-item-label class="text-bold">Plum Account</q-item-label>
                  <q-item-label caption>@plumaccount</q-item-label>
                </q-item-section>

                <q-btn icon="person" round flat color="primary">
                  <AuthAccountMenu />
                </q-btn>
              </q-item>
              <q-separator />
              <div
                class="row justify-between"
                v-for="account in accounts"
                :key="account.id"
              >
                <q-item-section>
                  <q-item-label header>Phone No.</q-item-label>
                  <q-item-label>{{ account.Tel }}</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label header>Email</q-item-label>
                  <q-item-label>{{ account.Email }}</q-item-label>
                </q-item-section>
              </div>
            </q-card>
            <q-space class="q-pa-lg" />
            <div class="text-bold">
              <q-card flat>
                <q-item>
                  <q-item-section class="col-12">
                    <q-banner inline-actions class="bg-primary">
                      <template v-slot:action>
                        <q-btn
                          flat
                          class="absolute-center text-secondary"
                          label="Activities"
                        />
                      </template>
                    </q-banner>
                  </q-item-section>
                </q-item>
              </q-card>
            </div>
            <q-space class="q-pa-lg" />
            <q-list class="full-width">
              <q-item to="/profile/users" clickable>
                <q-item-section avatar>
                  <q-avatar color="primary" text-color="secondary">
                    C
                  </q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center text-secondary"
                    >Communication List</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-4">
                  <q-btn
                    :ripple="true"
                    class="absolute-right text-caption q-pa-sm q-ma-xs text-secondary"
                    flat
                    dense
                    to="/profile/users"
                    push
                    color="primary"
                    label="Unread"
                    no-caps
                  >
                    <q-badge color="primary" floating>22</q-badge>
                  </q-btn>
                </q-item-section>
              </q-item>

              <q-space class="q-pa-sm" />

              <q-item to="/profile/payments" clickable>
                <q-item-section avatar class="col-4">
                  <q-avatar color="primary" text-color="secondary">
                    P
                  </q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center text-secondary"
                    >Payments</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-4">
                  <q-btn
                    to="/profile/payments"
                    class="absolute-right text-secondary"
                    icon="eva-arrow-ios-forward-outline"
                    flat
                    dense
                    color="secondary"
                  />
                </q-item-section>
              </q-item>
              <q-space class="q-pa-sm" />
              <q-item to="/profile/settings" clickable>
                <q-item-section avatar class="col-4">
                  <q-avatar
                    color="primary"
                    text-color="secondary"
                    icon="eva-settings-2"
                  ></q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center text-secondary"
                    >Settings</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-4">
                  <q-btn
                    to="/profile/settings"
                    class="absolute-right text-secondary"
                    icon="eva-arrow-ios-forward-outline"
                    flat
                    dense
                    color="secondary"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
      <div class="page-body-spacer-footer"></div>
    </page-body>
  </page>
</template>

<script>
import { defineComponent } from "vue";
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageBody from "src/components/PagePlumComponent/PageBody.vue";
import AuthAccountMenu from "src/auth/components/AccountMenu/AccountMenu.vue";

export default defineComponent({
  components: {
    Page,
    PageHeader,
    PageBody,
    AuthAccountMenu,
  },
  name: "PageProfile",
  data() {
    return {
      accounts: [
        {
          id: 1,
          name: "Plum Account",
          Tel: "0727256611",
          Email: "plumuser@plum.com",
          Online: true,
        },
      ],
    };
  },
});
</script>
