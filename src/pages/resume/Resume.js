import { GitHub, LinkedIn, LocationOn } from "@mui/icons-material"
import { Avatar, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import resumeAvatar from "../../assets/resumeAvatar.JPG"


const Resume = () => {
    return (
        <Box align="center">




            <Box sx={{ width: "60%", display: "flex", flexWrap: "wrap", mt: 5 }}>


                <Box align="center" sx={{ boxSizing: "border-box", width: 200 }}>
                    <Avatar src={resumeAvatar} sx={{ boxSizing: "border-box", width: 120, height: 120 }} />
                </Box>

                <Box sx={{ boxSizing: "border-box", width: 600 }}>
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
                        sx={{ ml: 0, fontWeight: "500", display: "flex", alignItems: "center" }}
                        align="left"
                    >
                        <LocationOn color="secondary" fontSize="medium" />
                        Surabaya City, East Java, Indonesia
                        <LinkedIn sx={{ ml: 1 }} color="secondary" fontSize="medium" />
                        <GitHub sx={{ ml: 1 }} color="secondary" fontSize="medium" />
                    </Typography>
                </Box>



                <Box >
                    <Typography
                        sx={{ fontWeight: 600, mt: 10 }}
                        variant="h5"
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
                </Box>

            </Box>






        </Box>
    )
}

export default Resume