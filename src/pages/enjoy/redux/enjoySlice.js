import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as axios from "axios";


export const getFunFieldText = createAsyncThunk(
    "enjoy/getFunFieldText",
    async (_, { dispatch }) => {
        try {
            dispatch(setFunLoading(true))
            const response = await axios.get("https://6321d90d82f8687273baba5a.mockapi.io/enjoy/funFieldText")
            const data = response.data[0]
            dispatch(setFunFieldText({ text: data.funFieldText }))
            dispatch(setFunLoading(false))
        } catch (error) {
            dispatch(setFunLoading(false))
            alert(error)
        }
    }
)

const initialState = {
    dummyFieldValue: "Hi, I'm from redux state",
    fieldValueFromBack: "Initial state",
    loading: false
}

const enjoySlice = createSlice({
    name: 'enjoy',
    initialState,
    reducers: {
        setDummyFieldValue(state, action) {
            state.dummyFieldValue = action.payload.text
        },
        setFunFieldText(state, action) {
            state.fieldValueFromBack = action.payload.text
        },
        setFunLoading(state, action) {
            state.loading = action.payload
        },
    }
})



export default enjoySlice.reducer
export const { setDummyFieldValue, setFunFieldText, setFunLoading } = enjoySlice.actions