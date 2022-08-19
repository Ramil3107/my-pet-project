import { DeleteOutlineOutlined } from "@mui/icons-material"
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material"
import { blue, green, pink, yellow } from "@mui/material/colors"



export const NoteCard = ({ note, handleDelete }) => {

    const classes = {
        avatar: {
            backgroundColor: (note) => {
                if(note.category == "work") {
                    return yellow[700]
                }
                if(note.category == "money") {
                    return green[500]
                }
                if(note.category == "todos") {
                    return pink[500]
                }
                if(note.category == "reminders") {
                    return blue[500]
                }
            }
        }
    }

    return (
        <Card elevation={1} >
            <CardHeader
                title={note.title}
                subheader={note.category}
                avatar=
                {<Avatar sx={{backgroundColor:classes.avatar.backgroundColor(note)}} >
                    {note.category[0].toUpperCase()}
                </Avatar>}
                action={
                    <IconButton onClick={() => handleDelete(note.id)} >
                        <DeleteOutlineOutlined />
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    )
}