import { boot } from "quasar/wrappers";

const plumComponents = {
  Page: require("components/PagePlumComponent/Page").default,
  PageHeader: require("components/PagePlumComponent/PageHeader").default,
  PageHeaderButtonBackLeft:
    require("components/PagePlumComponent/PageHeaderButtonBackLeft").default,
  PageHeaderButtonForwardRight:
    require("components/PagePlumComponent/PageHeaderButtonForwardRight")
      .default,
  PageBody: require("components/PagePlumComponent/PageBody").default,
  PageSettingsButton: require("components/PagePlumComponent/PageSettingsButton")
    .default,
  PageButtonBack: require("components/PagePlumComponent/PageButtonBack")
    .default,
  PlumHeaderSearch: require("components/PagePlumComponent/PlumHeaderSearch")
    .default,
  PlumSendMoneyFormComponent:
    require("components/PagePlumComponent/PlumSendMoneyFormComponent").default,
  PlumBuygoodsFormComponent:
    require("components/PagePlumComponent/PlumBuygoodsFormComponent").default,
  PlumPaybillFormComponent:
    require("components/PagePlumComponent/PlumPaybillFormComponent").default,
  PlumApplicationBtn: require("components/PagePlumComponent/PlumApplicationBtn")
    .default,
};
export default boot(async ({ app }) => {
  for (const key in plumComponents) {
    app.component(key, plumComponents[key]);
  }
});
