import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material"
import { Container } from "@mui/system"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useState } from "react"
import * as axios from "axios"


function Create() {

    const classes = {
        field: {
            marginBottom: "20px",
            marginTop: "20px",
            display: "block",
        },
    }

    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState("todos")

    let submitHandler = (e) => {
        e.preventDefault()

        setTitleError(false)
        setDetailsError(false)

        if (!title) {
            setTitleError(true)
        }
        if (!details) {
            setDetailsError(true)
        }
        if (title && details) {
            axios.post("http://localhost:3001/notes", {
                title,
                details,
                category
            })
            setDetails("")
            setTitle("")
        }
    }

    return (

        <Container>

            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>

            <form
                onSubmit={submitHandler}
                noValidate
                autoComplete="off"
            >

                <TextField
                    sx={classes.field}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    error={titleError}
                    label="Note Title"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                />

                <TextField
                    sx={classes.field}
                    error={detailsError}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    label="Details"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={4}
                    fullWidth
                    required
                />

                <FormControl sx={classes.field}>
                    <FormLabel color="secondary">Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="money" control={<Radio color="secondary" />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio color="secondary" />} label="Todos" />
                        <FormControlLabel value="reminders" control={<Radio color="secondary" />} label="Reminders" />
                        <FormControlLabel value="work" control={<Radio color="secondary" />} label="Work" />
                    </RadioGroup>
                </FormControl>

                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>

            </form>

        </Container>
    )
}

export default Create