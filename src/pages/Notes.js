import React, { useEffect, useState } from "react"
import * as axios from "axios"
import { Container, Grid, Paper } from "@mui/material"


function Notes() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/notes")
            .then(response => response.data)
            .then(data => setNotes(data))
    }, [])

    return (
        <Container>
            <Grid container>
                {notes.map(note => (
                    <Grid item xs={12} md={6} lg={4} key={note.id}>
                        <Paper>{note.title}</Paper> 
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Notes