import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material"
import { AppBar, Avatar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { format } from "date-fns"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { notesAPI } from "./api/notesAPI"
import { deleteNoteThunk, getNotesThunk } from "./redux/thunks"

const DRAWER_WIDTH = 240
const classes = {
    page: {
        background: "#f9f9f9",
        width: "100%",
        padding: 50,
    },
    root: {
        display: "flex",
        minHeight: "100vh"
    },
    active: {
        backgroundColor: "#f4f4f4"
    },
}

const sideDrawerItems = [
    {
        text: 'My Notes',
        icon: <SubjectOutlined color='secondary' />,
        path: "mynotes"
    },
    {
        text: 'Create Note',
        icon: <AddCircleOutlineOutlined color='secondary' />,
        path: "create"
    },
]


export const Notes = () => {

    const notes = useSelector(state => state.notes.myNotes)
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const onCreateNote = (...arg) => {
        notesAPI.createNote(...arg)
    }

    const showNotes = () => {
        dispatch(getNotesThunk())
    }

    const onDeleteNote = (id) => {
        dispatch(deleteNoteThunk(id))
    }


    return (
        <Box style={classes.root}>

            <Paper
                elevation={0}
                square
                sx={{
                    width: 300,
                    pt: 3,
                    border: "0.5px grey solid",
                    borderBottom: "0px",
                    borderLeft: "0px",
                    borderTop: "0px"
                }}
            >
                <List>
                    {
                        sideDrawerItems.map(item => (
                            <ListItem
                                sx={location.pathname == item.path ? classes.active : null}
                                key={item.text}
                                button
                                onClick={() => navigate(item.path)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))
                    }

                </List>
            </Paper>

            <div style={classes.page}>
                <Outlet context={{ onCreateNote, showNotes, onDeleteNote, notes }} />
            </div>

        </Box>
    )
}