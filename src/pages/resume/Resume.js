import { GitHub, LinkedIn, LocationOn } from "@mui/icons-material"
import { Avatar, Divider, Grid, List, ListItem, Paper, SvgIcon, Typography } from "@mui/material"
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
import socialShare from "../../assets/iconsPNG/socialShare.png"
import paw from "../../assets/iconsPNG/paw.png"
import khnadu from "../../assets/iconsPNG/khnadu.png"




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

    const projectsItems = [
        {
            src: socialShare,
            projectName: "Social Network",
            projectLink: "social-media.com",
            projectNote: "My first project",
            projectDescription: "During 3 years working as a freelance designer, I get a lot of experience helping the branding process of several companies, from small companies to large companies, such as energy companies.",
        },
        {
            src: paw,
            projectName: "My Pet Project",
            projectLink: "my-pet-project.com",
            projectNote: "My second project",
            projectDescription: "5 years as an educator at Al-Fatah Elementary School apart from making the teaching and learning       process fun, I have been the chairman of several events both offline and online, such as celebrations of national."
        },
        {
            src: reactNative,
            projectName: "React Native ",
            projectLink: "react-native.com",
            projectNote: "My third project",
            projectDescription: "During 3 years working as a freelance designer, I get a lot of experience helping the branding process of several companies, from small companies to large companies, such as energy companies.",
        },
    ]

    const advantagesItem = ["I have three pet projects", "Studied with a mentor", "Have little commercial experience"]
    const languagesItem = ["English", "Ukrainian", "Russian", "Azerbaijani"]

    return (
        <Box align="center" sx={{ }}>

            <Box sx={{ width: "65%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", mt: 5 }}>


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



                <Box sx={{ mt: 10, width: "100%" }}>
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
                            return <Paper key={item.title} sx={styles.paper}>
                                <img style={{ width: 30, height: 30 }} src={item.src} />
                                <Typography sx={{ ml: 1 }}>{item.title}</Typography>
                            </Paper>
                        })
                    }
                </Box>


                <Box sx={{ mt: 3, width: "100%" }}>
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
                            return <Paper key={item.title} sx={styles.paper}>
                                <img style={{ width: 30, height: 30 }} src={item.src} />
                                <Typography sx={{ ml: 1 }}>{item.title}</Typography>
                            </Paper>
                        })
                    }
                </Box>

                <Box sx={{ mt: 10, width: "100%" }}>
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

                {
                    projectsItems.map(item => {
                        return <Grid spacing={1} container wrap="wrap" sx={{ mt: 3 }}>
                            <Grid xs={12} md={3} lg={2} item>
                                <img style={{ width: 90, height: 90, float: "left" }} src={item.src} />
                            </Grid>
                            <Grid item xs={12} md={4} lg={4}>
                                <Typography
                                    fontWeight="medium"
                                    variant="h5"
                                    color="text.primary"
                                    align="left"
                                >
                                    {item.projectName}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="secondary"
                                    align="left"
                                >
                                    {item.projectLink}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    align="left"
                                    fontWeight="medium"
                                >
                                    {item.projectNote}
                                </Typography>
                            </Grid>
                            <Grid xs={12} md={12} lg={6} item>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    fontWeight="medium"
                                    align="left"
                                >
                                    {item.projectDescription}
                                </Typography>
                            </Grid>
                        </Grid>
                    })
                }

                <Box sx={{ mt: 10, width: "100%" }}>
                    <Typography
                        sx={{ fontWeight: 600, }}
                        variant="h4"
                        color="secondary"
                        align="left"
                    >
                        Education
                    </Typography>
                    <Divider sx={{ mt: 3 }} />
                </Box>

                <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", mt: 3 }}>
                    <Box sx={{ width: 130 }}>
                        <img style={{ width: 130, height: 130, float: "left" }} src={khnadu} />
                    </Box>
                    <Box sx={{ width: 400 }}>
                        <Typography
                            fontWeight="medium"
                            variant="h5"
                            color="text.primary"
                            align="left"
                        >
                            Kharkiv National Automobile and Highway University
                        </Typography>
                        <Typography
                            variant="h6"
                            color="secondary"
                            align="left"
                        >
                            Master's Degree
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            align="left"
                            fontWeight="medium"
                        >
                            2015-2020
                        </Typography>
                    </Box>

                </Box>

                <Box sx={{ display: 'flex', flexWrap: "wrap", width: "100%", mt: 5, p: 5, mb:5,color: "white", bgcolor: "rgb(50,64,108)" }}>
                    <Box sx={{ mr: 25, width: 300 }}>
                        <Typography
                            fontWeight="medium"
                            variant="h5"
                            color="primary"
                            align="left"
                        >
                            Advantages
                        </Typography>
                        <Divider color="white" sx={{ mt: 3 }} />

                        <List
                            sx={{
                                listStyleType: 'disc',
                                pl: 2,
                                '& .MuiListItem-root': {
                                    display: 'list-item',
                                },
                            }}>
                            {
                                advantagesItem.map(title => {
                                    return <ListItem sx={{ fontSize: 20 }}>
                                        <Typography
                                            variant="subtitle1"
                                            color="primary"
                                            align="left"
                                            fontWeight="medium"
                                        >
                                            {title}
                                        </Typography>
                                    </ListItem>
                                })
                            }
                        </List>
                    </Box>
                    <Box sx={{ width: 300 }}>
                        <Typography
                            fontWeight="medium"
                            variant="h5"
                            color="primary"
                            align="left"
                        >
                            Languages
                        </Typography>
                        <Divider color="white" sx={{ mt: 3, color: "white" }} />

                        <List
                            sx={{
                                listStyleType: 'disc',
                                pl: 2,
                                '& .MuiListItem-root': {
                                    display: 'list-item',
                                },
                            }}>
                            {
                                languagesItem.map(title => {
                                    return <ListItem sx={{ fontSize: 20 }}>
                                        <Typography
                                            variant="subtitle1"
                                            color="primary"
                                            align="left"
                                            fontWeight="medium"
                                        >
                                            {title}
                                        </Typography>
                                    </ListItem>

                                })
                            }
                        </List>
                    </Box>
                </Box>

            </Box>
        </Box >
    )
}

export default Resume
