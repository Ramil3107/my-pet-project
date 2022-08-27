import { GitHub, LinkedIn, LocationOn } from "@mui/icons-material"
import { Avatar, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import resumeAvatar from "../../assets/resumeAvatar.JPG"


const Resume = () => {
    return (
        <Box align="center">

            <Box sx={{ width: "70%", mt:5}}>
                <Grid container>
                    <Grid item xs={6} md={3}>
                        <Avatar src={resumeAvatar} sx={{ width: 130, height: 130 }} />
                    </Grid>
                    <Grid item xs={6} md={9} sx={{ml:0}}>
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
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ width: "70%", mt:5}}>
                <Typography
                sx={{fontWeight:600}}
                variant="h5"
                color="secondary"
                align="left"
                >
                    Skill
                </Typography>
            </Box>
        </Box>
    )
}

export default Resume