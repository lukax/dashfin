import { rootReducer } from "./reducers";
import { configureStore, Store, getDefaultMiddleware } from "@reduxjs/toolkit";

const middleware = [...getDefaultMiddleware({ thunk: false })];

export interface ApplicationState {
    //PUT REDUCERS TYPE HERE

}

const store: Store<ApplicationState> = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
