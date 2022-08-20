import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "../pages/notes/redux/notesSlice";

export const store = configureStore({
    reducer: {
        notes:notesSlice
    }
})


window.store = store.getState()