import { configureStore } from "@reduxjs/toolkit";
import  users  from './features/usersSlice'
import recourses from './features/resourceSlice'
export const store = configureStore({
    reducer:{
        users: users,
        recourses:  recourses
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch