import { configureStore } from "@reduxjs/toolkit";
import locationsReducer from "./locationsSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      locations: locationsReducer,
    },
  });

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
