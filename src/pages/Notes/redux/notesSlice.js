import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myNotes: []
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes(state, action) {
            state.myNotes = action.payload.data
        }

    }
})


export default notesSlice.reducer
export const { setNotes } = notesSlice.actions