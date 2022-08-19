import { configureStore } from "@reduxjs/toolkit";
import notes from "../pages/notes/redux/notesSlice"



export const store = configureStore({
    reducer: {
        notes
    }
})