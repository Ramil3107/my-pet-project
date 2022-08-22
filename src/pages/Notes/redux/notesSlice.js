import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notesAPI } from "../api/notesAPI";


export const getNotesThunk = createAsyncThunk(
    "notes/getNotesThunk",
    (_, { dispatch }) => notesAPI.getNotes()
        .then(data => dispatch(setNotes({ data })))
)
export const deleteNoteThunk = createAsyncThunk(
    "notes/deleteNoteThunk",
    (id, { dispatch }) => {
        notesAPI.deleteNote(id)
        dispatch(deleteNote({ id }))
    }
)


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
            state.myNotes = state.myNotes.filter(note => note.id != action.payload.id)
        }

    }
})



export default notesSlice.reducer
export const { setNotes, deleteNote } = notesSlice.actions