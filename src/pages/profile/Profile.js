import { getAuth, updateProfile } from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useAuth } from "../../hooks/useAuth"
import { removeUser, setDisplayName, setPhotoUrl } from "../auth/redux/userSlice"
import defaultAvatar from "../../assets/defaultAvatar.png"
import { Box } from "@mui/system"
import { Avatar, Badge, Button, Divider, Grid, IconButton, Input, TextField, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { Add, Camera, PhotoCamera, Upload } from "@mui/icons-material"
import ProfileInfo from "./components/ProfileInfo"




const Profile = () => {
    const { email, id, photoURL, displayName, phoneNumber } = useAuth()
    const { currentUser } = getAuth()
    const auth = getAuth()
    const storage = getStorage()
    const dispatch = useDispatch()
    const [photo, setPhoto] = useState(null)
    const [name, setName] = useState("")
    let [editMode, setEditMode] = useState(false)

    const browseFileHandler = (e) => {
        setPhoto(e.target.files[0])
    }

    const logoutHandler = () => {
        dispatch(removeUser())
        auth.signOut()
    }

    const uploadPhoto = async (file, userId) => {
        const fileRef = ref(storage, userId + ".png");
        const snapshot = await uploadBytes(fileRef, file)
        const photoURL = await getDownloadURL(fileRef)
        const photoUpdate = await updateProfile(currentUser, { photoURL: photoURL })
        dispatch(setPhotoUrl(currentUser.photoURL))

        alert("Uploaded file!")
    }

    const uploadName = async (name) => {
        const nameUpdate = await updateProfile(currentUser, { displayName: name })
        dispatch(setDisplayName(currentUser.displayName))
        console.log(currentUser)
        alert("Name Changed!")
    }

    const propsToProfileInfo = {
        displayName,
        defaultAvatar,
        setEditMode,
        logoutHandler,
        phoneNumber,
        email,
        id,
        photoURL,
        editMode
    }

    return (
        <>
            {
                !editMode ?
                    <ProfileInfo
                        {...propsToProfileInfo}
                    />
                    :
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
                                    <Button onClick={() => uploadPhoto(photo, id)} disabled={!photo} size="small" variant="outlined" color="warning" endIcon={<Upload />} aria-label="upload picture" component="label">
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
                                            onClick={() => uploadName(name)}
                                        >
                                            Change
                                        </Button>
                                    </Box>
                                    <Divider variant="fullwidth" color="white" sx={{ color: "black" }} />
                                </Box>
                            </Box>
                        </Box>
                    </>
            }
        </>
    )
}

export default Profile