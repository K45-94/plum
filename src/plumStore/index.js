import { reactive } from "vue";

const state = reactive({
  navItems: [
    {
      root: "/light",
      to: "/light",
      icon: "eva-bulb",
    },
    {
      root: "/profile",
      to: "/profile",
      icon: "eva-square",
    },
  ],
  usePageTransition: false,
  theme: "dim-background", // Default theme
  textColor: "green", // Default text color

  // Define text color options for each background theme
  textColorOptions: {
    "bright-background": ["black", "red", "blue"],
    "dim-background": ["black", "white", "green"],
    "dark-background": ["white", "yellow", "green"],
  },
});

const store = {
  state,
};

export default store;
