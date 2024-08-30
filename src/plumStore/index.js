import { reactive } from "vue";

const state = reactive({
  navItems: [
    {
      root: "/feeds",
      to: "/feeds",
      icon: "eva-home",
    },
    {
      root: "/search",
      to: "/search",
      icon: "eva-search",
    },
    {
      root: "/camera",
      to: "/camera",
      icon: "eva-camera",
    },
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

  feeds: [
    {
      id: "id40",
      url: "/images/40.jpg",
      name: "username_m",
      caption: "cmhr",
      post: "This is the top post on plum. First, you may be wondering why plum.",
      location: "Winnipeg",
      accountName: "Freedom Architects",
    },
    {
      id: "id32",
      url: "/images/32.jpg",
      name: "username_l",
      caption: "Tatu City",
      post: "This is the second post on plum. Normal social spaces are polluted with different types of chaos. From propaganda, fake news, bullying, agendas targeting persons and others.",
      location: "Kitui",
      accountName: "Kenya Airways",
    },
    {
      id: "id7",
      url: "/images/7.jpg",
      name: "username_a",
      caption: "Thika Road at Night",
      post: "This is the third post on plum. Now we look at forms of bullying. The kenyan twitter space bullied their president out of all social media platforms.",
      location: "Marakwet",
      accountName: "Telkom Kenya",
    },
    {
      id: "id8",
      url: "/images/8.jpg",
      name: "username_b",
      caption: "Ngong sunset with Pauline",
      post: "This is the fourth post on plum. At this point, plum is just a concept that there can exist a different type of social media with all the goodies of many other platforms less all the baddies of these platforms.",
      location: "Lamu",
      accountName: "Plum",
    },
    {
      id: "id9",
      url: "/images/9.jpg",
      name: "username_c",
      caption: "Tatu City",
      post: "This is the fifth post on plum. Social media platforms do help people connect with each other, so plum should have some kind of inbuild chat feature.",
      location: "Busia",
      accountName: "Tecno Kenya",
    },
    {
      id: "id14",
      url: "/images/14.jpg",
      name: "username_d",
      caption: "Tatu City",
      post: "This is the sixth post on plum. Social media platforms also help businesses connect better with their customers. Plum should allow different financial transactions such as B2B, C2B, peer2peer transactions etc.",
      location: "Moyale town",
      accountName: "Hilton Hotels",
    },
    {
      id: "id18",
      url: "/images/18.jpg",
      name: "username_e",
      caption: "Tatu City",
      post: "This is the seventh post on plum. Social media platforms are currently integrating with different kinds of payment wallets. Plum should also be a hub for various mobile-payment wallets as well as pick-up on the idea of crypto-wallets.",
      location: "Nakuru",
      accountName: "NSE",
    },
    {
      id: "id24",
      url: "/images/24.jpg",
      name: "username_f",
      caption: "Tatu City",
      post: "This is the eigth post on plum.",
      location: "Kitale",
      accountName: "Bamburi",
    },
    {
      id: "id25",
      url: "/images/25.jpg",
      name: "username_p",
      caption: "Random caption",
      post: "This is the ninth post on plum.",
      location: "Ainabkoi",
      accountName: "Kings Collection",
    },
    {
      id: "id27",
      url: "/images/27.jpg",
      name: "username_g",
      caption: "Tatu City",
      post: "This is the tenth post on plum.",
      location: "Laikipia",
      accountName: "Jambo Jet",
    },
    {
      id: "id28",
      url: "/images/28.jpg",
      name: "username_h",
      caption: "Tatu City",
      post: "This is the eleventh post on plum.",
      location: "Narumoru",
      accountName: "Keroche",
    },
    {
      id: "id29",
      url: "/images/29.jpg",
      name: "username_i",
      caption: "Tatu City",
      post: "This is the twelfth post on plum.",
      location: "Kapsabet",
      accountName: "Quickmart",
    },
    {
      id: "id31",
      url: "/images/31.jpg",
      name: "username_j",
      caption: "Tatu City",
      post: "This is the thirteenth post on plum.",
      location: "Njoro",
      accountName: "Brookside",
    },
    {
      id: "id41",
      url: "/images/41.jpg",
      name: "username_k",
      caption: "Downtown Winnipeg",
      post: "This is the thirteenth post on plum.",
      location: "Winnipeg",
      accountName: "MTS",
    },
  ],

  users: [
    {
      id: 1,
      name: "Kelvin Githinji",
      chat: "doing all my transactions in plum",
      online: true,
    },
    {
      id: 2,
      name: "Plum User2",
      chat: "we have a meeting at 5 pm remember",
      online: false,
    },
    {
      id: 3,
      name: "Plum User3",
      chat: "servers are up and running",
      online: false,
    },
    {
      id: 4,
      name: "Plum User4",
      chat: "secured!",
      online: true,
    },
    {
      id: 5,
      name: "Plum User5",
      chat: "check this out, you can now send money via plum",
      online: true,
    },
    {
      id: 6,
      name: "Plum User6",
      chat: "Hi, kindly check the new technical document i have sent",
      online: true,
    },
    {
      id: 8,
      name: "Plum User7",
      chat: "your MRI scan results are out. check them below",
      online: false,
    },
    {
      id: 9,
      name: "Plum User7",
      chat: "Tesla",
      online: false,
    },
    {
      id: 11,
      name: "Plum User8",
      chat: "We are moving upcountry next week, will you visit us?",
      online: false,
    },
    {
      id: 12,
      name: "Plum User9",
      chat: "amazing horses",
      online: false,
    },
    {
      id: 13,
      name: "Plum User10",
      chat: "meeting next week",
      online: false,
    },
    {
      id: 14,
      name: "Plum User11",
      chat: "backend",
      online: true,
    },
    {
      id: 15,
      name: "Plum User12",
      chat: "i need help with linux",
      online: true,
    },
    {
      id: 16,
      name: "Plum User13",
      chat: "the client reverts",
      online: true,
    },
    {
      id: 18,
      name: "Plum User14",
      chat: "your MRI scan results are out. check them below",
      online: false,
    },
    {
      id: 19,
      name: "Plum User15",
      chat: "Tesla",
      online: true,
    },
  ],
  messages: [
    {
      text: "social apps should not be addictive",
      from: "me",
    },
    {
      text: "the HickHyman law",
      from: "them",
    },
    {
      text: "less features results in faster decision making. also, trim the decision making process",
      from: "them",
    },
    {
      text: "and we need mpesa integration on this chat section. would be great to mpesa on a chat app",
      from: "me",
    },
    {
      text: "doing all my transactions in plum",
      from: "them",
    },
  ],

  usePageTransition: false,
  theme: "dim-background", // Default theme
});

const getters = {
  getFeed(feedId) {
    return state.feeds.filter((feed) => feed.id === feedId)[0];
  },
};

const store = {
  state,
  getters,
};

export default store;
