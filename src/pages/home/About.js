import { Box } from "@mui/system"
import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"



const About = () => {

    return (
        <Box  sx={{ bgcolor: "#ffbfba", minHeight: "100vh" }} >
            <Outlet />
            <Box align="center" sx={{width:"100%", mt:5, pb:5}}>
                <Navigation />
            </Box>
        </Box>
    )
}

export default About