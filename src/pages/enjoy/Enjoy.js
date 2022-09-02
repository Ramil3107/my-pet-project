import { TextFieldsOutlined, VolumeDown, VolumeUp } from "@mui/icons-material"
import { Button, Divider, Rating, Slider, TextField, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { Box, Stack } from "@mui/system"
import { useState } from "react"

const styles = {
    wrapper: {
        bgcolor: "rgb(14, 25, 40)",
        minHeight: "200vh",
        pt: 5
    },
    blockDescription: {
        bgcolor: "rgb(8, 29, 58)",
        border: "1px solid rgb(27, 46, 74)",
        borderRadius: "10px",
        width: "50%",
        mb: 10
    },
    elementsTitle: {
        mb: 5,
        border: "1px solid rgb(27, 46, 74)",
        borderRadius: "10px",
        width: "max-content",
        p: 1
    },
    elementsBlock: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "70%"
    },
    textFieldFilled: {
        "& .MuiFilledInput-root": {
            backgroundColor: "rgb(232, 241, 250)"
        },
        "& .MuiFilledInput-root:hover": {
            backgroundColor: "rgb(250, 232, 241)",
        },
        "& .MuiFilledInput-root.Mui-focused": {
            backgroundColor: "rgb(232, 241, 250)"
        },
        '& .MuiInputBase-root': {
            color: 'black',
        },
    },
    textFieldOutlined: {
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
    textFieldStandard: {
        '& .MuiInputBase-root': {
            color: '#00FFFF',
        },
    }
}



const Enjoy = () => {

    const [volume, setVolume] = useState(30)
    const handleVolume = (event, newValue) => {
        setVolume(newValue);
    };


    return (
        <Box align="center" sx={styles.wrapper}>
            <Box sx={{ mb: 5 }}>
                <Typography color="primary" fontWeight={600} variant="h4" >
                    Hey! Lets start with Matreial UI library
                </Typography>
            </Box>
            <Box sx={styles.blockDescription}>
                <Typography color="primary" p={1} variant="subtitle1" >
                    What is Material UI?
                    <br />
                    Material-UI is simply a library that allows us to import and use different components to create a user interface in our React applications. This saves a significant amount of time since the developers do not need to write everything from scratch.
                    <br />
                    Let me show you:
                </Typography>
            </Box>

            <Box sx={{ mb: 10 }}>
                <Typography variant="h5" color="primary" sx={styles.elementsTitle}>Buttons</Typography>
                <Box sx={styles.elementsBlock}>
                    <button style={{ height: 30 }}>Native HTML</button>
                    <Divider sx={{ bgcolor: "white", height: 40 }} orientation="vertical" light />
                    <Button variant="outlined">MUI Outlined</Button>
                    <Button variant="contained">MUI Contained</Button>
                    <Button variant="text">MUI Text</Button>
                </Box>
            </Box>
            <Divider variant="middle" sx={{ bgcolor: "white", width: "70%", mb: 10 }} />
            <Box sx={{ mb: 10 }}>
                <Typography variant="h5" color="primary" sx={styles.elementsTitle}>Text Fields</Typography>
                <Box sx={styles.elementsBlock}>
                    <input style={{ height: 20 }} placeholder="Native HTML" />
                    <Divider sx={{ bgcolor: "white", height: 40 }} orientation="vertical" light />
                    <TextField
                        label="MUI Outlined"
                        variant="outlined"
                        sx={styles.textFieldOutlined}
                        InputLabelProps={{
                            style: { color: '#00FFFF' },
                        }}

                    />
                    <TextField
                        label="Filled"
                        variant="filled"
                        sx={styles.textFieldFilled}
                        InputLabelProps={{
                            style: { color: 'black' },
                        }}
                    />
                    <TextField
                        label="MUI Standard"
                        variant="standard"
                        sx={styles.textFieldStandard}
                        InputLabelProps={{
                            style: { color: '#00FFFF' },
                        }}
                    />
                </Box>
            </Box>
            <Divider variant="middle" sx={{ bgcolor: "white", width: "70%", mb: 10 }} />

            <Box>
                <Typography variant="h5" color="primary" sx={styles.elementsTitle}>Play With That</Typography>
                <Box sx={styles.elementsBlock}>
                    <Rating />
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <VolumeDown />
                        <Slider sx={{width:100}} aria-label="Volume" value={volume} onChange={handleVolume} />
                        <Typography color="primary">{volume}</Typography>
                        <VolumeUp />
                    </Stack>˝
                </Box>
            </Box>

        </Box >
    )
}

export default Enjoy