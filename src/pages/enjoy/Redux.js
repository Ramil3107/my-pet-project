import { LoadingButton } from "@mui/lab"
import { Button, Divider, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getFunFieldText, setDummyFieldValue } from "./redux/enjoySlice"

const styles = {
    wrapper: {
        bgcolor: "rgb(112, 76, 182)",
        minHeight: "100vh",
        pt: 5,
        pb: 20
    },
    blockDescription: {
        bgcolor: "rgb(51, 61, 62)",
        border: "1px solid rgb(27, 46, 74)",
        borderRadius: "10px",
        width: "50%",
        minWidth: 350,
        mb: 10
    },
    elementsTitle: {
        mb: 5,
        border: "1px solid rgb(27, 46, 74)",
        borderRadius: "10px",
        width: "max-content",
        p: 1
    },
    textFieldOutlined: {
        minWidth: "30%",
        mt: 5,
        "& .MuiOutlinedInput-root": {
            '& fieldset': {
                borderColor: "rgb(232, 241, 250)"
            },
            '&:hover fieldset': {
                borderColor: '#00FFFF',
            },
        },
        '& .MuiInputBase-root': {
            color: '#00FFFF',
        },
    },
}


const Redux = () => {
    const { dummyFieldValue, fieldValueFromBack, loading } = useSelector(state => state.enjoy)
    const dispatch = useDispatch()
    const [localStateValue, setLocalStateValue] = useState("")
    const [stateValue, setStateValue] = useState("")
    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <Box align="center" sx={styles.wrapper}>
            <div id="top"></div>
            <Box sx={{ mb: 5 }}>
                <Typography color="primary" fontWeight={600} variant="h4" >
                    Redux
                </Typography>
            </Box>
            <Box sx={styles.blockDescription}>
                <Typography color="primary" p={1} variant="subtitle1" >
                    What is Redux?
                    <br />
                    Redux is simply a store to store the state of the variables in your app. Redux creates a process and procedures to interact with the store so that components will not just update or read the store randomly. Similar to the bank. It does not mean because you have money in the bank that you can go anytime, open the vault, and take money. You have to go through certain steps to withdrawal money.
                </Typography>
            </Box>


            <Box sx={{ mb: 10 }}>
                <Typography variant="h5" color="primary" sx={styles.elementsTitle}>Let's start with local state</Typography>
                <Typography sx={{ width: "70%" }} variant="subtitle1" color="primary">
                    Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.
                </Typography>

                <Box sx={{ width: "70%" }}>
                    <TextField
                        value={localStateValue}
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ style: { color: '#00FFFF' }, }}
                        inputProps={{ maxLength: 40 }}
                        label="I can change local state "
                        sx={styles.textFieldOutlined}
                        onChange={(e) => setLocalStateValue(e.target.value)}
                    />

                    <TextField
                        aria-readonly
                        fullWidth
                        InputLabelProps={{ style: { color: '#00FFFF' }, }}
                        inputProps={{ maxLength: 40 }}
                        label="My value from local state"
                        sx={styles.textFieldOutlined}
                        value={localStateValue}
                    />
                </Box>
            </Box>

            <Box>
                <Typography variant="h5" color="primary" sx={styles.elementsTitle}>Let's try same things with Redux</Typography>
                <Typography sx={{ width: "70%" }} variant="subtitle1" color="primary">
                    So, how it's work? You can write some text and click dispatch button. Dispatcher "send" action creator which include action type and payload (optional). Then reducer make a immutable changes with state and return new state.
                </Typography>

                <Box sx={{ width: "70%", mb: 10 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                        <TextField
                            value={stateValue}
                            fullWidth
                            variant="outlined"
                            InputLabelProps={{ style: { color: '#00FFFF' }, }}
                            inputProps={{ maxLength: 40 }}
                            label="Dispatch my value!"
                            sx={styles.textFieldOutlined}
                            onChange={(e) => setStateValue(e.target.value)}
                        />
                        <Button
                            onClick={() => dispatch(setDummyFieldValue({ text: stateValue }))}
                            variant="contained"
                            sx={{ width: "30%", height: 50, mt: 5, ml: 3 }}
                        >
                            Dispatch Me
                        </Button>
                    </Box>


                    <TextField
                        aria-readonly
                        fullWidth
                        InputLabelProps={{ style: { color: '#00FFFF' }, }}
                        inputProps={{ maxLength: 40 }}
                        label="My value from state"
                        sx={styles.textFieldOutlined}
                        value={dummyFieldValue}
                    />
                </Box>
            </Box>

            <Box>
                <Typography variant="h5" color="primary" sx={styles.elementsTitle}>Redux Thunk</Typography>
                <Typography sx={{ width: "70%" }} variant="subtitle1" color="primary">
                    Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises. One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request.
                </Typography>

                <Box sx={{ width: "70%" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                        <TextField
                            aria-readonly
                            value={fieldValueFromBack}
                            fullWidth
                            variant="outlined"
                            InputLabelProps={{ style: { color: '#00FFFF' }, }}
                            inputProps={{ maxLength: 40 }}
                            label="My text saw backend and state!"
                            sx={styles.textFieldOutlined}
                        />
                        <LoadingButton
                            onClick={() => dispatch(getFunFieldText())}
                            variant="contained"
                            sx={{ width: "30%", height: 50, mt: 5, ml: 3 }}
                            loading={loading}
                        >
                            Get Text
                        </LoadingButton>
                    </Box>


                    <TextField
                        aria-readonly
                        fullWidth
                        InputLabelProps={{ style: { color: '#00FFFF' }, }}
                        inputProps={{ maxLength: 40 }}
                        label="Same story"
                        sx={styles.textFieldOutlined}
                        value={fieldValueFromBack}
                    />
                </Box>
            </Box>

            <Divider variant="middle" sx={{ bgcolor: "white", width: "50%", mt: 10, mb: 10 }} />

            <Box sx={{ width: "40%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <Button
                    variant="outlined"
                    sx={{ height: 50 }}
                    component={NavLink}
                    to="/enjoy" >
                    Back to Material UI
                </Button>

                <Divider sx={{ bgcolor: "white", height: 40 }} orientation="vertical" light />

                <Button
                    variant="outlined"
                    sx={{ height: 50 }}
                    component={NavLink}
                    to="/enjoy/hookform" >
                    Go to React Hook Form
                </Button>
            </Box>

        </Box>
    )
}

export default Redux