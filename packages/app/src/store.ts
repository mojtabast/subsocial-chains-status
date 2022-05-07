import { configureStore } from "@reduxjs/toolkit";
import chainsReducer from "./features/chains/slice";

export let store = configureStore({
  reducer: {
    chains: chainsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
