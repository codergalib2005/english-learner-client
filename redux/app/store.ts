import { configureStore } from "@reduxjs/toolkit";
import { animalsApi } from "../feature/animals/animalsApi";
import { apiSlice } from "../feature/api/apiSlice";
import { birdApi } from "../feature/birds/birdApi";
import { fruitsApi } from "../feature/fruits/fruitsApi";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    birds: birdApi.reducer,
    animals: animalsApi.reducer,
    fruits: fruitsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
