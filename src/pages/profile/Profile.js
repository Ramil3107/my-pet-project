import { getAuth, updateProfile } from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useAuth } from "../../hooks/useAuth"
import { removeUser, setDisplayName, setPhotoUrl } from "../auth/redux/userSlice"
import defaultAvatar from "../../assets/defaultAvatar.png"
import { Box } from "@mui/system"
import { Avatar, Button, Divider, Grid, Input, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"




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

    return (
        <>
            {
                !editMode ?
                    <Box sx={{ width: "100%", mt: 3, ml: 1, mr: 1, }}>

                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                            <Avatar sx={{ width: 150, height: 150 }} src={photoURL} />
                            <Box sx={{ ml: 3 }}>
                                <Typography variant="h5" >{displayName}</Typography>
                                <Typography sx={{ mb: 2 }} color={blue[500]} variant="subtitle1">User ID: {id}</Typography>
                                <Button
                                    sx={{ mr: 3 }}
                                    size="small"
                                    variant="outlined"
                                    color="info"
                                    onClick={() => setEditMode(!editMode)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    color="error"
                                    onClick={logoutHandler}
                                >
                                    Logout
                                </Button>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                            <Box sx={{ ml: 0, width: "80%", display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                                <Divider variant="fullwidth" color="white" sx={{ mt: 5, color: "black", display: "block" }} />
                                <Box sx={{ display: "flex", flexWrap: "wrap", p: 3 }}>
                                    <Typography sx={{ mr: 1 }} variant="h6">
                                        Nickname:
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        color={displayName ? "secondary" : "GrayText"}
                                    >
                                        {displayName || "Add your nickname"}
                                    </Typography>
                                </Box>
                                <Divider variant="fullwidth" color="white" sx={{ color: "black" }} />
                                <Box sx={{ display: "flex", flexWrap: "wrap", p: 3 }}>
                                    <Typography sx={{ mr: 1 }} variant="h6">
                                        Email:
                                    </Typography>
                                    <Typography variant="h6" color="secondary">{email}</Typography>
                                </Box>
                                <Divider variant="fullwidth" color="white" sx={{ color: "black" }} />
                                <Box sx={{ display: "flex", p: 3 }}>
                                    <Typography sx={{ mr: 1, flexWrap: "wrap", }} variant="h6">
                                        Phone Number:
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        color={phoneNumber ? "secondary" : "GrayText"}
                                    >
                                        {phoneNumber || "Add your phone number"}
                                    </Typography>
                                </Box>
                                <Divider variant="fullwidth" color="white" sx={{ color: "black" }} />
                            </Box>
                        </Box>

                    </Box>
                    :
                    <>
                        <h1>Welcome {displayName ? displayName : email}</h1>
                        <button onClick={logoutHandler}>Log Out</button>
                        <div style={{ marginTop: 50 }}>
                            <input type="file" onChange={browseFileHandler} />
                            <button disabled={!photo} onClick={() => uploadPhoto(photo, id)}>Upload Photo</button>
                            <img
                                style={{ borderRadius: "100%", width: 50, height: 50 }}
                                alt="avatar"
                                src={photoURL ? photoURL : defaultAvatar}
                            />
                        </div>
                        <div style={{ marginTop: 50 }}>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <button disabled={!name} onClick={() => uploadName(name)}>Upload Name</button>
                            <mark style={{ marginLeft: 30 }}>{displayName ? displayName : "Set your name"}</mark>
                        </div>
                    </>
            }
        </>
    )
}

export default Profile