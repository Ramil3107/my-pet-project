import { Box, Button, Typography } from "@mui/material"
import CVpage from "../../assets/homePage/CVpage.png"
import homePageImg from "../../assets/homePage/homePageImg.png"
import Navigation from "./components/Navigation"



const Home = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", width: "100%", bgcolor: "#ffbfba", minHeight: "100vh"}}>
            <Box sx={{ ml: "5%", width: 500, p: 1 }}>
                <Typography
                    sx={{ mt: 3 }}
                    variant="h2"
                    fontWeight="bold"
                >
                    Home Page
                </Typography>
                <Typography
                    sx={{ mt: 3 }}
                    variant="subtitle1"
                >
                    5 years as an educator at Al-Fatah Elementary School apart from making the teaching and learning process fun, I have been the chairman of several events both offline and online, such as celebrations of national.
                    5 years as an educator at Al-Fatah Elementary School apart from making the teaching and learning process fun, I have been the chairman of several events both offline and online, such as celebrations of national.
                </Typography>
                <Button
                    sx={{ mt: 5 }}
                    size="large"
                    variant="outlined"
                    color="primary"
                    disabled
                >
                    You Already Here
                </Button>
            </Box>

            <Box sx={{ width: 800 }}>
                <img style={{ width: "100%", height: "100%" }} src={homePageImg} />
            </Box>

            <Box align="center" sx={{width:"100%", mt:5, pb:5}}>
                <Navigation />
            </Box>

        </Box>
    )
}

export default Home