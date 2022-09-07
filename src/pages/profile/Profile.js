import { getAuth, updateProfile } from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useAuth } from "../../hooks/useAuth"
import { removeUser, setDisplayName, setPhotoUrl } from "../auth/redux/userSlice"
import defaultAvatar from "../../assets/defaultAvatar.png"




const Profile = () => {
    const { email, id, photoURL, displayName } = useAuth()
    const { currentUser } = getAuth()
    const auth = getAuth()
    const storage = getStorage()
    const dispatch = useDispatch()
    const [photo, setPhoto] = useState(null)
    const [name, setName] = useState("")

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

        alert("Name Changed!")
    }

    return (
        <div style={{ marginLeft: 50 }}>
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
                <mark style={{marginLeft:30}}>{displayName ? displayName : "Set your name"}</mark>
            </div>
        </div>
    )
}

export default Profile