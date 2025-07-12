import { configureStore } from "@reduxjs/toolkit";
import { aliApi } from "./slice/aliApi";

export const store = configureStore({
  reducer: {
    [aliApi.reducerPath]: aliApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aliApi.middleware),
});
