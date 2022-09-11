import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


export const signInThunk = createAsyncThunk(
    "user/signInThunk",
    (data, { dispatch }) => {
        const { email, password, navigate } = data
        const auth = getAuth();
        dispatch((setAuthStatus("loading")))
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid,
                    creationTime: user.metadata.creationTime,
                }))
                dispatch(setAuthStatus("resolved"))
                navigate("/profile")
            })
            .catch((error) => {
                dispatch(setAuthStatus("error"))
                navigate("/auth/signin")
                alert(error.message)
            });
    }
)
export const signUpThunk = createAsyncThunk(
    "user/signUpThunk",
    (data, { dispatch }) => {
        const { email, password, navigate } = data
        const auth = getAuth();
        dispatch((setAuthStatus("loading")))
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                }))
                dispatch(setAuthStatus("resolved"))
                navigate("/profile")
            })
            .catch((error) => {
                dispatch(setAuthStatus("error"))
                navigate("/auth/signin")
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


const initialState = {
    email: null,
    token: null,
    id: null,
    photoURL: null,
    displayName: null,
    creationTime: null,
    statuses: {
        authStatus: null
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.creationTime = action.payload.creationTime;
        },
        removeUser(state) {
            state.displayName = null
            state.photoURL = null;
            state.email = null;
            state.token = null;
            state.id = null;
        },
        setPhotoUrl(state, action) {
            state.photoURL = action.payload
        },
        setDisplayName(state, action) {
            state.displayName = action.payload
        },
        setCreationTime(state, action) {
            state.creationTime = action.payload
        },
        setAuthStatus(state, action) {
            state.statuses.authStatus = action.payload
        }
    },
    extraReducers: {
        [signInThunk.rejected]: (state) => {
            state.statuses.authStatus = "rejected"
        },
        [signUpThunk.rejected]: (state) => {
            state.statuses.authStatus = "rejected"
        }
    }
})




export default userSlice.reducer
export const { setUser, removeUser, setPhotoUrl, setDisplayName, setCreationTime, setAuthStatus } = userSlice.actions