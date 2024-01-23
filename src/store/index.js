import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUsers";
export * from "./thunks/removeUser";
export { useFetchAlbumsQuery } from "./apis/albumsApi";
