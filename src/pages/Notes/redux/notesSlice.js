import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notesAPI } from "../api/notesAPI"



export const getNotesThunk = createAsyncThunk(
    "notes/getNotesThunk",
    async (_, { dispatch }) => {
        try {
            dispatch(setStatus("loading"))
            let data = await notesAPI.getNotes()
            dispatch(setNotes({ data }))
            dispatch(setStatus("resolved"))
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
    myNotes: [],
    status: null
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
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
})



export default notesSlice.reducer
export const { setNotes, deleteNote, setStatus } = notesSlice.actions