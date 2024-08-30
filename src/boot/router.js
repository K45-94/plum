import { boot } from "quasar/wrappers";
import store from "src/plumStore";

let routerInstance = null;
export default boot(({ router }) => {
  routerInstance = router;
  router.afterEach(({ path: fromPath }, { path: toPath }) => {
    let fromRootPath = fromPath.split("/")[1],
      toRootPath = toPath.split("/")[1];

    store.state.usePageTransition = fromRootPath !== toRootPath ? false : true;
  });
});

export { routerInstance };
