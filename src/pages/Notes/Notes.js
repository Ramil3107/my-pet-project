import React, { useEffect, useState } from "react"
import * as axios from "axios"
import { Container, Grid, Paper } from "@mui/material"
import { NoteCard } from "../../components/NoteCard"
import Masonry from "react-masonry-css"
import styles from "./Notes.module.css"


function Notes() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/notes")
            .then(response => response.data)
            .then(data => setNotes(data))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/notes/${id}`)

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

export default Notes