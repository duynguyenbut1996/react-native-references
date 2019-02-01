import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import rootSaga from "../Sagas/";

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  teams: require("./TeamsRedux").reducer,
  users: require("./UserRedux").reducer,
  resources: require("./ResourcesRedux").reducer,
  nav: require("./NavigationRedux").reducer,
  common: require('./CommonRedux').reducer
});

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(
    reducers,
    rootSaga
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./").reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require("../Sagas").default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};
