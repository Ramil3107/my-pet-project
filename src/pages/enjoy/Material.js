import { Add, ExpandMore, Mail, Remove, StarBorder, TextFieldsOutlined, VolumeDown, VolumeUp } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Alert, Badge, Button, ButtonGroup, Divider, Rating, Slider, Switch, TextField, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { Box, Stack } from "@mui/system"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const styles = {
    wrapper: {
        bgcolor: "rgb(14, 25, 40)",
        minHeight: "max-content",
        pt: 5,
        pb: 20
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
        flexWrap: "wrap",
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



const Material = () => {

    const [volume, setVolume] = useState(30)
    const [starValue, setStarValue] = useState(3)
    const [switchValue, setSwitchValue] = useState(true)
    const [badgeCount, setBadgeCount] = useState(3)
    const [alertValue, setAlertValue] = useState("info")

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


            <Typography variant="h5" color="primary" sx={styles.elementsTitle}>Play With That</Typography>

            <Box sx={styles.elementsBlock}>
                <Box sx={{ mr: 5 }}>
                    <Rating
                        onClick={(e) => setStarValue(e.target.value)}
                        value={starValue}
                        emptyIcon={<StarBorder sx={{ color: "white" }} fontSize="inherit" />}
                    />
                </Box>
                <Box>
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <VolumeDown color="primary" />
                        <Slider sx={{ width: 100 }} aria-label="Volume" value={volume} onChange={handleVolume} />
                        <Typography color="primary">{volume}</Typography>
                        <VolumeUp color="primary" />
                    </Stack>
                </Box>

                <Box>
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <Switch checked={switchValue} onChange={() => setSwitchValue(!switchValue)} color="error" />
                        <Switch checked={switchValue} onChange={() => setSwitchValue(!switchValue)} color="warning" />
                        <Switch checked={switchValue} onChange={() => setSwitchValue(!switchValue)} color="info" />
                    </Stack>
                </Box>

                <Box sx={{ display: "flex" }}>
                    <Box>
                        <Badge sx={{ mr: 3 }} color="primary" badgeContent={badgeCount}>
                            <Mail color="primary" />
                        </Badge>
                    </Box>
                    <Box>
                        <ButtonGroup>
                            <Button
                                aria-label="reduce"
                                onClick={() => {
                                    setBadgeCount(Math.max(badgeCount - 1, 0));
                                }}
                            >
                                <Remove fontSize="small" />
                            </Button>
                            <Button
                                aria-label="increase"
                                onClick={() => {
                                    setBadgeCount(badgeCount + 1);
                                }}
                            >
                                <Add fontSize="small" />
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", mt: 3 }}>
                    <Alert severity={alertValue}>This is an alert — Don't Click The Button!</Alert>
                    <Button
                        onClick={() => alertValue == "info" ? setAlertValue("error") : setAlertValue("info")}
                    >
                        Don't Click Me!
                    </Button>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Open Me!</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You Are The Best!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>

            </Box>

            <Divider variant="middle" sx={{ bgcolor: "white", width: "70%", mt: 10 }} />
            <Button component={NavLink} to="redux" sx={{mt:10}} variant="outlined" size="large">Next Step: Redux</Button>

        </Box >
    )
}

export default Material