import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material"
import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { format } from "date-fns"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { notesAPI } from "./api/notesAPI"
import { deleteNote, deleteNoteThunk, getNotesThunk, setNotes } from "./redux/notesSlice"

const DRAWER_WIDTH = 240
const classes = {
    page: {
        background: "#f9f9f9",
        width: "100%",
        padding: 20,
        paddingTop: 110
    },
    drawer: {
        width: DRAWER_WIDTH
    },
    drawerPaper: {
        width: DRAWER_WIDTH
    },
    root: {
        display: "flex"
    },
    active: {
        backgroundColor: "#f4f4f4"
    },
    appbar: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        height: 65
    },
    date: {
        flexGrow: 1
    },
    avatar: {
        marginLeft: 2,
        backgroundColor: blue[200]
    }
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
        <div style={classes.root}>


            {/* App Bar */}

            <AppBar
                sx={classes.appbar}
                elevation={1}
            >
                <Toolbar>
                    <Typography sx={classes.date}>
                        Today is {format(new Date(), "do MMMM Y")}
                    </Typography>
                    <Typography>
                        UserName
                    </Typography>
                    <Avatar sx={classes.avatar}>UA</Avatar>
                </Toolbar>
            </AppBar>

            {/* Side Drawer */}

            <Drawer
                sx={{
                    width: DRAWER_WIDTH,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: DRAWER_WIDTH,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >

                <div>
                    <Typography variant="h5" sx={{ marginLeft: 1 }}>
                        Pet Notes
                    </Typography>
                </div>

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

            </Drawer>

            {/* Pages */}

            <div style={classes.page}>
                <Outlet context={{ onCreateNote, showNotes, onDeleteNote, notes }} />
            </div>

        </div>
    )
}