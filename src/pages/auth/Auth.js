import { Box, Tab, Tabs } from "@mui/material"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { removeUser, setPhotoUrl } from "./redux/userSlice"
import defaultAvatar from "../../assets/defaultAvatar.png"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth"





const Auth = () => {

    const dispatch = useDispatch()
    const storage = getStorage()
    const { isAuth, email, id, photoURL } = useAuth()
    const [value, setValue] = useState('1');
    const [photo, setPhoto] = useState(null)
    const {currentUser} = getAuth()

    const logoutHandler = () => {
        dispatch(removeUser())

    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const browseFileHandler = (e) => {
        setPhoto(e.target.files[0])
    }

    const uploadButtonHandler = () => {

    }


    //Profile

    const upload = async (file, userId) => {
        const fileRef = ref(storage, userId + ".png");
        const snapshot = await uploadBytes(fileRef, file)
        const photoURL = await getDownloadURL(fileRef)
        
        const profileUpdated = await updateProfile(currentUser, {photoURL:photoURL})
        
        dispatch(setPhotoUrl(currentUser.photoURL))
        
        alert("Uploaded file!")
    }


    return (
        <>
            {
                isAuth ?
                    <div style={{ marginLeft: 50 }}>
                        <h1>Welcome {email}</h1>
                        <button onClick={logoutHandler}>Log Out</button>
                        <div style={{ marginTop: 50 }}>
                            <input type="file" onChange={browseFileHandler} />
                            <button disabled={!photo} onClick={() => upload(photo, id)}>Upload</button>
                            <img
                                style={{ borderRadius: "100%", width: 50, height: 50 }}
                                alt="avatar"
                                src={photoURL ? photoURL : defaultAvatar}
                            />
                        </div>
                    </div>
                    :
                    <Box
                        component="div"
                    >

                        <Tabs
                            sx={{ mt: 2 }}
                            centered
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="secondary"
                        >
                            <Tab
                                value="1"
                                label="Sign In"
                                component={NavLink}
                                to="signin"
                            />
                            <Tab
                                value="2"
                                label="Sign Up"
                                component={NavLink}
                                to="signup"
                            />
                        </Tabs>
                        <Box
                            component="div"
                            align="center"
                        >
                            <Outlet />
                        </Box>
                    </Box>
            }
        </>
    )
}

export default Auth