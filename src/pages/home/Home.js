import { Box, Button, Typography } from "@mui/material"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Navigation from "./components/Navigation"



const Home = () => {

    useEffect(() => { window.scrollTo(0, 0) }, [])

    const { pages, navIcons, currentScreen } = useSelector(state => state.home)
    const navigate = useNavigate()

    const setScreen = (currentScreen) => {
        switch (currentScreen) {
            case "home":
                return pages[0];
            case "resume":
                return pages[1]
            case "profile":
                return pages[2]
            case "notes":
                return pages[3]
            case "enjoy":
                return pages[4]
        }
    }

    return (
        <>
            <Typography
                pt={2}
                height={10}
                color="white"
                bgcolor={setScreen(currentScreen).bgcolor}
                align="center"
                variant="h4"
            >
                Roadmap
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "100%",
                    minHeight: "100vh",
                    bgcolor: setScreen(currentScreen).bgcolor
                }}
            >

                <Box sx={{ ml: "5%", width: 510, p: 1, height: "28rem" }}>
                    <Typography
                        sx={{ mt: 3 }}
                        variant="h2"
                        fontWeight="bold"
                    >
                        {setScreen(currentScreen).title}
                    </Typography>
                    <Typography
                        sx={{ mt: 3 }}
                        variant="subtitle1"
                    >
                        {setScreen(currentScreen).description}
                    </Typography>
                    <Button
                        onClick={() => navigate(setScreen(currentScreen).buttonPath)}
                        sx={{ mt: 5 }}
                        size="large"
                        variant="outlined"
                        color="primary"
                        disabled={setScreen(currentScreen).isDisabled}
                    >
                        {setScreen(currentScreen).buttonText}
                    </Button>
                </Box>

                <Box sx={{ width: 800 }}>
                    <img
                        style={{ width: "100%", height: "33rem" }}
                        src={setScreen(currentScreen).img} />
                </Box>

                <Box
                    align="center"
                    sx={{ width: "100%", mt: 5, pb: 5 }}
                >
                    <Navigation
                        currentScreen={currentScreen}
                        navIcons={navIcons}
                    />
                </Box>

            </Box>
        </>

    )
}

export default Home