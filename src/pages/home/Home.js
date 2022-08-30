import { Box, Button, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import Navigation from "./components/Navigation"



const Home = () => {

    const pages = useSelector(state => state.home.pages)
    const currentScreen = useSelector(state => state.home.currentScreen)

    const setScreen = (currentScreen) => {
        switch (currentScreen) {
            case "home":
                return pages[0];
            case "resume":
                return pages[1]
            case "profile":
                return pages[2]
            case "news":
                return pages[3]
            case "secret":
                return pages[4]
        }
    }

    return (
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
            <Box sx={{ ml: "5%", width: 510, p: 1 }}>
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
                <Navigation currentScreen={currentScreen} />
            </Box>
        </Box>

    )
}

export default Home