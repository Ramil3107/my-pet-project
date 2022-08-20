import React, { useEffect } from "react"
import { Container, Grid } from "@mui/material"
import { NoteCard } from "./NoteCard"
import Masonry from "react-masonry-css"
import styles from "../Notes.module.css"
import { useOutletContext } from "react-router-dom"


function MyNotes() {

    const { notes, showNotes, onDeleteNote } = useOutletContext()

    useEffect(() => {
        showNotes()
    }, [])

    const handleDelete = (id) => {
        onDeleteNote(id)
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