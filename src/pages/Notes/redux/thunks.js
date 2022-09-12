import { createAsyncThunk } from "@reduxjs/toolkit"
import { notesAPI } from "../api/notesAPI"
import { deleteNote, setNotes } from "./notesSlice"



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