import { GitHub, LinkedIn, LocationOn } from "@mui/icons-material"
import { Avatar, Paper, SvgIcon, Typography } from "@mui/material"
import { Box } from "@mui/system"
import resumeAvatar from "../../assets/resumeAvatar.JPG"
import html from "../../assets/iconsPNG/html.png"
import css from "../../assets/iconsPNG/css.png"
import js from "../../assets/iconsPNG/js.png"
import react from "../../assets/iconsPNG/react.png"
import reactNative from "../../assets/iconsPNG/reactNative.png"
import form from "../../assets/iconsPNG/form.png"
import mui from "../../assets/iconsPNG/mui.png"
import reduxicon from "../../assets/iconsPNG/reduxicon.png"
import axiosIcon from "../../assets/iconsPNG/axiosIcon.png"
import routerDom from "../../assets/iconsPNG/routerDom.png"
import firebaseIcon from "../../assets/iconsPNG/firebaseIcon.png"




const Resume = () => {

    const styles = {
        paper: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "max-content",
            height: 50,
            float: "left",
            mt: 3,
            mr: 3,
            pl: 1,
            pr: 1
        }
    }

    return (
        <Box align="center">

            <Box sx={{ width: "60%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", mt: 5 }}>


                <Box sx={{ boxSizing: "border-box", width: "180px" }}>
                    <Avatar src={resumeAvatar} sx={{ width: 120, height: 120 }} />
                </Box>

                <Box sx={{ boxSizing: "border-box", width: "650px" }}>

                    <Typography
                        gutterBottom
                        sx={{ ml: 0, fontWeight: "600" }}
                        align="left"
                        variant="h5"
                    >
                        Ramil Abbasov
                    </Typography>

                    <Typography
                        gutterBottom
                        sx={{ ml: 0, fontWeight: "500" }}
                        align="left"
                    >
                        I have 3 years experience as a freelance logo designer. With ideas and analysis of customer data, I can help maximize their branding process.
                    </Typography>

                    <Typography
                        gutterBottom
                        sx={{ fontWeight: "500", display: "flex", alignItems: "center" }}
                        align="left"
                    >
                        <LocationOn color="secondary" fontSize="medium" />
                        Surabaya City, East Java, Indonesia
                        <LinkedIn
                            onClick={() => window.open('https://www.linkedin.com/in/ramil-abbasov-a1b40324a/', '_blank')}
                            sx={{ ml: 1, cursor: "pointer" }}
                            color="secondary"
                            fontSize="medium" />
                        <GitHub
                            onClick={() => window.open('https://github.com/Ramil3107', '_blank')}
                            sx={{ ml: 1, cursor: "pointer" }}
                            color="secondary"
                            fontSize="medium" />
                    </Typography>
                </Box>



                <Box sx={{ mt: 10, float: "left", width: "100%" }}>

                    <Typography
                        sx={{ fontWeight: 600, }}
                        variant="h4"
                        color="secondary"
                        align="left"
                    >
                        Skill
                    </Typography>

                    <Typography
                        sx={{ mt: 3 }}
                        variant="h6"
                        color="text.secondary"
                        align="left"
                    >
                        Tech Stack
                    </Typography>


                    <Paper sx={styles.paper}>
                        <img style={{ width: 30, height: 30 }} src={html} />
                        <Typography sx={{ ml: 1 }}>HTML</Typography>
                    </Paper>
                    <Paper sx={styles.paper}>
                        <img style={{ width: 30, height: 30 }} src={css} />
                        <Typography sx={{ ml: 1 }}>CSS</Typography>
                    </Paper>
                    <Paper sx={styles.paper}>
                        <img style={{ width: 30, height: 30 }} src={js} />
                        <Typography sx={{ ml: 1 }}>Java Script</Typography>
                    </Paper>
                    <Paper sx={styles.paper}>
                        <img style={{ width: 30, height: 30 }} src={react} />
                        <Typography sx={{ ml: 1 }}>React</Typography>
                    </Paper>
                    <Paper sx={styles.paper}>
                        <img style={{ width: 35, height: 35 }} src={reactNative} />
                        <Typography sx={{ ml: 1 }}>React Native</Typography>
                    </Paper>

                </Box>


                <Box sx={{ mt: 3, float: "left", width: "100%" }}>

                    <Typography
                        sx={{ mt: 2.5 }}
                        variant="h6"
                        color="text.secondary"
                        align="left"
                    >
                        Libraries / Services
                    </Typography>


                    <Paper sx={styles.paper}>
                        <img style={{ width: 30, height: 30 }} src={mui} />
                        <Typography sx={{ ml: 1 }}>Material UI</Typography>
                    </Paper>
                    <Paper sx={styles.paper}>
                        <img style={{ width: 30, height: 30 }} src={reduxicon} />
                        <Typography sx={{ ml: 1 }}>Redux/React-Redux</Typography>
                    </Paper>
                    <Paper sx={styles.paper}>
                        <img style={{ width: 45, height: 45 }} src={form} />
                        <Typography sx={{ ml: 1 }}>React Hook Form</Typography>
                    </Paper>
                    <Paper sx={styles.paper}>
                        <img style={{ width: 30, height: 30 }} src={axiosIcon} />
                        <Typography sx={{ ml: 1 }}>Axios</Typography>
                    </Paper>
                    <Paper sx={styles.paper}>
                        <img style={{ width: 30, height: 30 }} src={routerDom} />
                        <Typography sx={{ ml: 1 }}>React Router Dom(v6)</Typography>
                    </Paper>
                    <Paper sx={styles.paper}>
                        <img style={{ width: 30, height: 30 }} src={firebaseIcon} />
                        <Typography sx={{ ml: 1 }}>Firebase</Typography>
                    </Paper>

                </Box>

            </Box>

        </Box>
    )
}

export default Resume