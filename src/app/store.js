import { configureStore } from '@reduxjs/toolkit'
import currrencyReducer from '../features/currency/currencySlice'

export const store = configureStore({
  reducer: currrencyReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Option 1: Increase the threshold (e.g., to 100ms)
        warnAfter: 100, 
        // Option 2: Ignore specific actions or state paths if they are known to be large/non-serializable
        ignoredActionPaths: ['payload.largeData'],
        ignoredPaths: ['complexState.heavyList'],
      },
    }),

})