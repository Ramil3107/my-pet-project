import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Box } from "@mui/system"
import { Avatar, Button, Divider, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors"
import { PhotoCamera, Upload } from "@mui/icons-material";
import { uploadNameThunk, uploadPhotoThunk } from "../../auth/redux/thunks";


const Edit = ({
    displayName,
    defaultAvatar,
    setEditMode,
    phoneNumber,
    id,
    photoURL,
    editMode }) => {


    const storage = getStorage()
    const { currentUser } = getAuth()
    const dispatch = useDispatch()
    const [photo, setPhoto] = useState(null)
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    const uploadPhoto = (file, userId, storage, currentUser) => {
        const data = { file, userId, storage, currentUser }
        dispatch(uploadPhotoThunk(data))
    }

    const uploadName = (name, currentUser) => {
        const data = { name, currentUser }
        dispatch(uploadNameThunk(data))
    }

    const browseFileHandler = (e) => {
        setPhoto(e.target.files[0])
    }


    return (
        <>
            <Box sx={{ width: "100%", mt: 3, ml: 1, mr: 1, }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                    <Avatar sx={{ width: 150, height: 150 }} src={photoURL || defaultAvatar} />
                    <Box sx={{ ml: 3 }}>
                        <Typography variant="h5" >{displayName}</Typography>
                        <Typography sx={{ mb: 2 }} color={blue[500]} variant="subtitle1">User ID: {id}</Typography>
                        <Button
                            sx={{ mr: 3 }}
                            size="small"
                            variant="outlined"
                            color="success"
                            onClick={() => setEditMode(!editMode)}
                        >
                            Save
                        </Button>
                        <Button sx={{ mr: 0.5 }} size="small" variant="outlined" color="info" endIcon={<PhotoCamera />} aria-label="upload picture" component="label">
                            Select file
                            <input hidden accept="image/*"
                                onChange={browseFileHandler} type="file" />
                        </Button>
                        <Button onClick={() => uploadPhoto(photo, id, storage, currentUser)} disabled={!photo} size="small" variant="outlined" color="warning" endIcon={<Upload />} aria-label="upload picture" component="label">
                            Upload
                        </Button>
                        <Typography></Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    <Box sx={{ ml: 0, width: "80%", display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                        <Divider variant="fullwidth" color="white" sx={{ mt: 5, color: "black", display: "block" }} />
                        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", p: 3 }}>
                            <Typography sx={{ mr: 1 }} variant="h6">
                                Nickname:
                            </Typography>
                            <TextField
                                sx={{ mr: 3 }}
                                variant="standard"
                                color="secondary"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={displayName}
                            />
                            <Button
                                variant="text"
                                color="warning"
                                disabled={!name}
                                onClick={() => uploadName(name, currentUser)}
                            >
                                Change
                            </Button>
                        </Box>
                        <Divider variant="fullwidth" color="white" sx={{ color: "black" }} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Edit