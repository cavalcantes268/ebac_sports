import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import { produtosApi } from './api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [produtosApi.reducerPath]: produtosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
