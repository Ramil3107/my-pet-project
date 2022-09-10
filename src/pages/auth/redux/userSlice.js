import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    email: null,
    token: null,
    id: null,
    photoURL: null,
    displayName: null,
    phoneNumber: null,
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
            state.phoneNumber = action.payload.phoneNumber;
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
        }
    }
})



export default userSlice.reducer
export const { setUser, removeUser, setPhotoUrl, setDisplayName } = userSlice.actions