import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/userSlice";


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
                    id: user.uid
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