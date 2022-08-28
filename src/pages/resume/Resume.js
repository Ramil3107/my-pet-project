import { GitHub, LinkedIn, LocationOn } from "@mui/icons-material"
import { Avatar, Divider, Paper, SvgIcon, Typography } from "@mui/material"
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
        },
        socialSmallIcons: {
            ml: 1,
            cursor: "pointer"
        }
    }

    const techStackItems = [
        {
            src: html,
            title: "HTML"
        },
        {
            src: css,
            title: "CSS"
        },
        {
            src: js,
            title: "Java Script"
        },
        {
            src: react,
            title: "React"
        },
        {
            src: reactNative,
            title: "React Native"
        },
    ]
    const librariesServicesItems = [
        {
            src: mui,
            title: "Material UI"
        },
        {
            src: reduxicon,
            title: "Redux / React-Redux"
        },
        {
            src: form,
            title: "React Hook Form"
        },
        {
            src: axiosIcon,
            title: "Axios"
        },
        {
            src: routerDom,
            title: "React Router Dom(v6)"
        },
        {
            src: firebaseIcon,
            title: "Firebase"
        },
    ]

    return (
        <Box align="center" sx={{ height: "500vh" }}>

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
                            sx={styles.socialSmallIcons}
                            color="secondary"
                            fontSize="medium" />
                        <GitHub
                            onClick={() => window.open('https://github.com/Ramil3107', '_blank')}
                            sx={styles.socialSmallIcons}
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

                    {
                        techStackItems.map(item => {
                            return <Paper sx={styles.paper}>
                                <img style={{ width: 30, height: 30 }} src={item.src} />
                                <Typography sx={{ ml: 1 }}>{item.title}</Typography>
                            </Paper>
                        })
                    }



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


                    {
                        librariesServicesItems.map(item => {
                            return <Paper sx={styles.paper}>
                                <img style={{ width: 30, height: 30 }} src={item.src} />
                                <Typography sx={{ ml: 1 }}>{item.title}</Typography>
                            </Paper>
                        })
                    }

                </Box>

                <Box sx={{ mt: 10, float: "left", width: "100%" }}>
                    <Typography
                        sx={{ fontWeight: 600, }}
                        variant="h4"
                        color="secondary"
                        align="left"
                    >
                        Projects
                    </Typography>
                    <Divider sx={{ mt: 3 }} />
                </Box>

            </Box>

        </Box>
    )
}

export default Resume