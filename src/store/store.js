import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../pages/auth/redux/userSlice";
import homeSlice from "../pages/home/redux/homeSlice";
import notesSlice from "../pages/notes/redux/notesSlice";

export const store = configureStore({
    reducer: {
        notes: notesSlice,
        user: userSlice,
        home: homeSlice
    }
})


window.store = store.getState()