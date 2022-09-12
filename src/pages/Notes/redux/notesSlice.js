import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notesAPI } from "../api/notesAPI"



export const getNotesThunk = createAsyncThunk(
    "notes/getNotesThunk",
    async (_, { dispatch }) => {
        try {
            let data = await notesAPI.getNotes()
            dispatch(setNotes({ data }))
        } catch (error) {
            alert(error)
        }
    }

)


export const deleteNoteThunk = createAsyncThunk(
    "notes/deleteNoteThunk",
    async (id, { dispatch }) => {
        try {
            await notesAPI.deleteNote(id)
            dispatch(deleteNote({ id }))
        } catch (error) {
            alert(error)
        }
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