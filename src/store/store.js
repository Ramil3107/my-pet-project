import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../pages/auth/redux/userSlice";
import notesSlice from "../pages/notes/redux/notesSlice";

export const store = configureStore({
    reducer: {
        notes:notesSlice,
        user:userSlice
    }
})


window.store = store.getState()