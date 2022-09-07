import { getAuth, updateProfile } from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useAuth } from "../../hooks/useAuth"
import { removeUser, setPhotoUrl } from "../auth/redux/userSlice"
import defaultAvatar from "../../assets/defaultAvatar.png"




const Profile = () => {
    const { email, id, photoURL } = useAuth()
    const { currentUser } = getAuth()   
    const auth = getAuth()
    const storage = getStorage()
    const dispatch = useDispatch()
    const [photo, setPhoto] = useState(null)

    const browseFileHandler = (e) => {
        setPhoto(e.target.files[0])
    }

    const logoutHandler = () => {
        dispatch(removeUser())
        auth.signOut()
    }

    const upload = async (file, userId) => {
        const fileRef = ref(storage, userId + ".png");
        const snapshot = await uploadBytes(fileRef, file)
        const photoURL = await getDownloadURL(fileRef)

        const profileUpdated = await updateProfile(currentUser, { photoURL: photoURL })

        dispatch(setPhotoUrl(currentUser.photoURL))

        alert("Uploaded file!")
    }

    return (
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
    )
}

export default Profile