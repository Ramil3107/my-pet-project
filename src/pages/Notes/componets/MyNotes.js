import React, { useEffect, useState } from "react"
import * as axios from "axios"
import { Container, Grid, Paper } from "@mui/material"
import { NoteCard } from "./NoteCard"
import Masonry from "react-masonry-css"
import styles from "../Notes.module.css"
import { notesAPI } from "../api/notesAPI"
import { useDispatch, useSelector } from "react-redux"
import { setNotes } from "../redux/notesSlice"


function MyNotes() {

    const notes = useSelector(state => state.notes.myNotes)
    const dispatch = useDispatch()

    useEffect(() => {
        notesAPI.getNotes()
            .then(data => dispatch(setNotes({ data })))
    }, [])

    const handleDelete = (id) => {
        notesAPI.deleteNote(id)

        const data = notes.filter(note => note.id != id)
        dispatch(setNotes({ data }))
    }

    

    const breakpoints = {
        default: notes.length == 1 ? 1 : notes.length == 2 ? 2 : 3,
        1100: notes.length == 1 ? 1 : 2,
        700: 1,
    };
 
    return (
        <Container>
            <Grid container spacing={3}>
                <Masonry
                    breakpointCols={breakpoints}
                    className={styles.myMasonryGrid}
                    columnClassName={styles.myMasonryGridColumn}
                >
                    {notes.map(note => (
                        <div key={note.id}>
                            <NoteCard note={note} handleDelete={handleDelete} />
                        </div>
                    ))}
                </Masonry>
            </Grid>
        </Container>
    )
}

export default MyNotes