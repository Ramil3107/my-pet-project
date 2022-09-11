import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "../pages/auth/redux/userSlice";
import enjoySlice from "../pages/enjoy/redux/enjoySlice";
import homeSlice from "../pages/home/redux/homeSlice";
import notesSlice from "../pages/notes/redux/notesSlice";

export const store = configureStore({
    reducer: {
        notes: notesSlice,
        user: userSlice,
        home: homeSlice,
        enjoy: enjoySlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})