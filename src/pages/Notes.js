import React, { useEffect, useState } from "react"
import * as axios from "axios"


function Notes() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/notes")
            .then(response => response.data)
            .then(data => setNotes(data))
    }, [])

    return (
        <div>
           {notes.map(note => (
            <p key={note.id}>{note.title}</p>
           ))}
        </div>
    )
}

export default Notes