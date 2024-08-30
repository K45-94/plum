const routes = [
  {
    path: "/",
    component: () => import("src/layouts/PlumLayout.vue"),
    children: [
      {
        path: "",
        redirect: "/feeds",
      },
      {
        path: "feeds", // Relative path without leading slash
        component: () => import("src/pages/Feeds/PageFeeds.vue"),
        children: [
          {
            path: ":id", // Dynamic route for posts
            component: () => import("src/pages/Feeds/PagePost.vue"),
          },
        ],
      },
      {
        path: "search", // Relative path without leading slash
        component: () => import("src/pages/PageSearch.vue"),
      },
      {
        path: "camera", // Relative path without leading slash
        component: () => import("src/pages/PageCamera.vue"),
      },
      {
        path: "search", // Relative path without leading slash
        component: () => import("src/pages/PageSearch.vue"),
      },
      {
        path: "light",
        component: () => import("src/pages/PageLight.vue"),
      },
      {
        path: ":name", // Dynamic route for user profile
        component: () => import("src/pages/PageUserProfile.vue"),
      },
      {
        path: "profile", // Relative path without leading slash
        component: () => import("src/pages/Profile/PageProfile.vue"),
        children: [
          {
            path: "users", // Relative path without leading slash
            component: () => import("src/pages/Profile/PageUsers.vue"),
            name: "Users",
            children: [
              {
                path: ":id", // Dynamic route for chat
                component: () => import("src/pages/Profile/PageChat.vue"),
                name: "Chat",
              },
            ],
          },
          {
            path: "settings", // Relative path without leading slash
            component: () => import("src/pages/Profile/PageSettings.vue"),
            children: [
              {
                path: "themes", // Relative path without leading slash
                component: () => import("src/pages/Profile/PageThemes.vue"),
              },
            ],
          },
          {
            path: "payments", // Relative path without leading slash
            component: () =>
              import("src/pages/Profile/Payments/PagePayments.vue"),
            name: "Payments",
            children: [
              {
                path: "mpesawallet", // Relative path without leading slash
                component: () => import("pages/Profile/Payments/PageMpesa.vue"),
                name: "mpesawallet",
                children: [
                  {
                    path: "sendmpesa", // Relative path without leading slash
                    component: () =>
                      import("pages/Profile/Payments/PageSendMpesa.vue"),
                    name: "sendmpesa",
                  },
                  {
                    path: "lipanampesa", // Relative path without leading slash
                    component: () =>
                      import("pages/Profile/Payments/PageLipaNaMpesa.vue"),
                    name: "lipanampesa",
                  },
                ],
              },
              {
                path: "airtelwallet", // Relative path without leading slash
                component: () =>
                  import("pages/Profile/Payments/PageAirtelMoney.vue"),
                name: "airtelwallet",
                children: [
                  {
                    path: "sendairtelmoney", // Relative path without leading slash
                    component: () =>
                      import("pages/Profile/Payments/PageSendAirtelMoney.vue"),
                    name: "sendairtelmoney",
                  },
                ],
              },
              {
                path: "telkomwallet", // Relative path without leading slash
                component: () =>
                  import("pages/Profile/Payments/PageTelkomMoney.vue"),
                name: "telkomwallet",
                children: [
                  {
                    path: "sendtelkommoney", // Relative path without leading slash
                    component: () =>
                      import("pages/Profile/Payments/PageSendTelkomMoney.vue"),
                    name: "sendtelkommoney",
                  },
                ],
              },
              {
                path: "paypalwallet", // Relative path without leading slash
                component: () =>
                  import("pages/Profile/Payments/PagePayPalMoney.vue"),
                name: "paypalwallet",
                children: [
                  {
                    path: "sendpaypalmoney", // Relative path without leading slash
                    component: () =>
                      import("pages/Profile/Payments/PageSendPayPalMoney.vue"),
                    name: "sendpaypalmoney",
                  },
                ],
              },
              {
                path: "pesalinkwallet", // Relative path without leading slash
                component: () =>
                  import("pages/Profile/Payments/PagePesalinkMoney.vue"),
                name: "pesalinkwallet",
                children: [
                  {
                    path: "sendpesalinkmoney", // Relative path without leading slash
                    component: () =>
                      import(
                        "pages/Profile/Payments/PageSendPesalinkMoney.vue"
                      ),
                    name: "sendpesalinkmoney",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "/:catchAll(.*)*", // Catch-all route for 404 errors
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
