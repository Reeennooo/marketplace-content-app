// app/store.ts  или  app/providers/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '@/entities/users/model';
import { usersApi } from '@/entities/users/model';
import {kidsApi, kidsReducer} from '@/entities/kids/model';
import {productsApi, productsReducer} from 'entities/products/model';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    kids: kidsReducer,
    products: productsReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [kidsApi.reducerPath]: kidsApi.reducer, // ← добавили
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(kidsApi.middleware)
      .concat(productsApi.middleware)// ← добавили
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;