import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from "./apiSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});