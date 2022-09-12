import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../../api/api";


export const getFunFieldText = createAsyncThunk(
    "enjoy/getFunFieldText",
    async (_, { dispatch }) => {
        try {
            const response = await instance.get("enjoy")
            const data = response.data
            dispatch(setFunFieldText({ text: data.funFieldText }))
        } catch (error) {
            alert(error)
        }
    }
)

const initialState = {
    dummyFieldValue: "Hi, I'm from redux state",
    fieldValueFromBack: "Initial state"
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
    }
})



export default enjoySlice.reducer
export const { setDummyFieldValue, setFunFieldText } = enjoySlice.actions