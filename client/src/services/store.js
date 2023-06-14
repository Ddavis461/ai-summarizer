import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

// configure store, store is a global state that saves the entire information about the app
// don't need entire state, just need the articleApi reducer
export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
