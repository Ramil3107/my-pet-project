import React, { useEffect, useState } from "react"
import * as axios from "axios"
import { Container, Grid, Paper } from "@mui/material"
import { NoteCard } from "./NoteCard"
import Masonry from "react-masonry-css"
import styles from "../Notes.module.css"
import { notesAPI } from "../api/notesAPI"


function MyNotes() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        notesAPI.getNotes()
            .then(data => setNotes(data))
    }, [])

    const handleDelete = (id) => {
        notesAPI.deleteNote(id)

        const newNotes = notes.filter(note => note.id != id)
        setNotes(newNotes)
    }

    const breakpoints = {
        default: 3,
        1100: 2,
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