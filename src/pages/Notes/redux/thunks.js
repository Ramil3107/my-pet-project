import { createAsyncThunk } from "@reduxjs/toolkit"
import { notesAPI } from "../api/notesAPI"
import { deleteNote, setNotes } from "./notesSlice"



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