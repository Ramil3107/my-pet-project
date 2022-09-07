import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    email: null,
    token: null,
    id: null,
    photoURL: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.photoURL = action.payload.photoURL;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.photoURL = null;
            state.email = null;
            state.token = null;
            state.id = null;
        },
        setPhotoUrl(state, action) {
            console.log(action.payload)
            state.photoURL = action.payload
        }
    }
})



export default userSlice.reducer
export const { setUser, removeUser, setPhotoUrl } = userSlice.actions