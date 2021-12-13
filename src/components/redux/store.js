import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice';
import { productsApi } from './productsApi';
import productsReducer from './productSlice'


export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware),
});