import { createSlice } from "@reduxjs/toolkit"
import { signInThunk } from "./thunks";



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
        }
    }
})



export default userSlice.reducer
export const { setUser, removeUser, setPhotoUrl, setDisplayName, setCreationTime, setAuthStatus } = userSlice.actions