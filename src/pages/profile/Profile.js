import { getAuth } from "firebase/auth";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useAuth } from "../../hooks/useAuth"
import { removeUser } from "../auth/redux/userSlice";
import defaultAvatar from "../../assets/defaultAvatar.png"
import Info from "./components/Info"
import Edit from "./components/Edit"




const Profile = () => {
    const { email, id, photoURL, displayName, creationTime } = useAuth()
    const dispatch = useDispatch()
    const auth = getAuth()

    let [editMode, setEditMode] = useState(false)

    const logoutHandler = () => {
        dispatch(removeUser())
        auth.signOut()
    }

    const propsToInfo = {
        displayName,
        defaultAvatar,
        setEditMode,
        logoutHandler,
        creationTime,
        email,
        id,
        photoURL,
        editMode
    }

    const propsToEdit = {
        displayName,
        defaultAvatar,
        setEditMode,
        email,
        id,
        photoURL,
        editMode
    }

    return (
        <>
            {
                !editMode ?
                    <Info {...propsToInfo} />
                    :
                    <Edit {...propsToEdit} />
            }
        </>
    )
}

export default Profile