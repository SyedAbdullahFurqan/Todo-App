import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/Slice'


 export const store = configureStore({
  reducer: {    counter: counterReducer,
},
}) 

