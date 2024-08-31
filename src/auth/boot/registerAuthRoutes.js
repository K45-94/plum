import { boot } from "quasar/wrappers";

export default boot(({ router }) => {
  router.addRoute({
    path: "/register",
    name: "auth.register",
    meta: { unauthOnly: true },
    component: () => import("src/auth/pages/IdentityPasswordRegisterPage.vue"),
  });

  router.addRoute({
    path: "/login",
    name: "auth.login",
    meta: { unauthOnly: true },
    component: () => import("src/auth/pages/IdentityPasswordLoginPage.vue"),
  });

  router.addRoute({
    path: "/forgot-password",
    name: "auth.requestPasswordReset",
    meta: { unauthOnly: true },
    component: () =>
      import("src/auth/pages/PasswordResetRequestViaEmailPage.vue"),
  });

  router.addRoute({
    path: "/password-reset",
    name: "auth.resetPassword",
    meta: { unauthOnly: true },
    component: () => import("src/auth/pages/PasswordResetViaEmailPage.vue"),
  });

  // Add the main layout route with children
  router.addRoute({
    path: "/",
    component: () => import("src/layouts/PlumLayout.vue"),
    children: [
      {
        path: "/light",
        meta: { authOnly: true },
        component: () => import("src/pages/PageLight.vue"),
      },
      {
        path: "/profile",
        meta: { authOnly: true },
        component: () => import("src/pages/Profile/PageProfile.vue"),
        children: [
          {
            path: "/profile/settings",
            meta: { authOnly: true },
            component: () => import("src/pages/Profile/PageSettings.vue"),
            children: [
              {
                path: "/profile/settings/themes",
                meta: { authOnly: true },
                component: () => import("src/pages/Profile/PageThemes.vue"),
              },
            ],
          },
          {
            path: "/profile/payments",
            meta: { authOnly: true },
            component: () =>
              import("src/pages/Profile/Payments/PagePayments.vue"),
            name: "Payments",
            children: [
              {
                path: "/profile/payments/mpesawallet",
                meta: { authOnly: true },
                component: () => import("pages/Profile/Payments/PageMpesa.vue"),
                name: "mpesawallet",
                children: [
                  {
                    path: "/profile/payments/mpesawallet/sendmpesa",
                    meta: { authOnly: true },
                    component: () =>
                      import("pages/Profile/Payments/PageSendMpesa.vue"),
                    name: "sendmpesa",
                  },
                  {
                    path: "/profile/payments/mpesawallet/lipanampesa",
                    meta: { authOnly: true },
                    component: () =>
                      import("pages/Profile/Payments/PageLipaNaMpesa.vue"),
                    name: "lipanampesa",
                  },
                ],
              },
              {
                path: "/profile/payments/airtelwallet",
                meta: { authOnly: true },
                component: () =>
                  import("pages/Profile/Payments/PageAirtelMoney.vue"),
                name: "airtelwallet",
                children: [
                  {
                    path: "/profile/payments/airtelwallet/sendairtelmoney",
                    meta: { authOnly: true },
                    component: () =>
                      import("pages/Profile/Payments/PageSendAirtelMoney.vue"),
                    name: "sendairtelmoney",
                  },
                ],
              },
              {
                path: "/profile/payments/telkomwallet",
                meta: { authOnly: true },
                component: () =>
                  import("pages/Profile/Payments/PageTelkomMoney.vue"),
                name: "telkomwallet",
                children: [
                  {
                    path: "/profile/payments/telkomwallet/sendtelkommoney",
                    meta: { authOnly: true },
                    component: () =>
                      import("pages/Profile/Payments/PageSendTelkomMoney.vue"),
                    name: "sendtelkommoney",
                  },
                ],
              },
              {
                path: "/profile/payments/paypalwallet",
                meta: { authOnly: true },
                component: () =>
                  import("pages/Profile/Payments/PagePayPalMoney.vue"),
                name: "paypalwallet",
                children: [
                  {
                    path: "/profile/payments/paypalwallet/sendpaypalmoney",
                    meta: { authOnly: true },
                    component: () =>
                      import("pages/Profile/Payments/PageSendPayPalMoney.vue"),
                    name: "sendpaypalmoney",
                  },
                ],
              },
              {
                path: "/profile/payments/pesalinkwallet",
                meta: { authOnly: true },
                component: () =>
                  import("pages/Profile/Payments/PagePesalinkMoney.vue"),
                name: "pesalinkwallet",
                children: [
                  {
                    path: "/profile/payments/pesalinkwallet/sendpesalinkmoney",
                    meta: { authOnly: true },
                    component: () =>
                      import(
                        "pages/Profile/Payments/PageSendPesalinkMoney.vue"
                      ),
                    name: "sendpesalinklmoney",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });

  // Catch-all route for 404
  router.addRoute({
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  });
});
