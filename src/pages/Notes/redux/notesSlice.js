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
        },
        deleteNote(state, action) {
            console.log(action.payload)
            state.myNotes = state.myNotes.filter(note => note.id != action.payload.id)
        }

    }
})


export default notesSlice.reducer
export const { setNotes, deleteNote } = notesSlice.actions