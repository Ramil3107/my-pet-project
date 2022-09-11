import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { setDisplayName, setPhotoUrl, setUser } from "../redux/userSlice";



export const signInThunk = createAsyncThunk(
    "user/signInThunk",
    (data, { dispatch }) => {
        const { email, password } = data
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid,
                    phoneNumber: user.phoneNumber,
                }))
            })
            .catch((error) => {
                alert(error.message)
            });
    }
)
export const signUpThunk = createAsyncThunk(
    "user/signUpThunk",
    (data, { dispatch }) => {
        const { email, password } = data
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                }))
            })
            .catch((error) => {
                alert(error.message)
            });
    }
)


export const uploadPhotoThunk = createAsyncThunk(
    "user/uploadPhotoThunk",
    async (data, { dispatch }) => {
        const { file, userId, storage, currentUser } = data
        const fileRef = ref(storage, userId + ".png");
        const snapshot = await uploadBytes(fileRef, file)
        const photoURL = await getDownloadURL(fileRef)
        const photoUpdate = await updateProfile(currentUser, { photoURL: photoURL })
        dispatch(setPhotoUrl(currentUser.photoURL))

        alert("Uploaded file!")
            .catch((error) => {
                alert(error.message)
            });
    }
)

export const uploadNameThunk = createAsyncThunk(
    "user/uploadNameThunk",
    async (data, { dispatch }) => {
        const { name, currentUser } = data
        const nameUpdate = await updateProfile(currentUser, { displayName: name })
        dispatch(setDisplayName(currentUser.displayName))
        alert("Name Changed!")
            .catch((error) => {
                alert(error.message)
            });
    }
)