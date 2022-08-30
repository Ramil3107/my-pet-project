import { Box } from "@mui/material"
import { useDispatch } from "react-redux"
import { setCurrentScreen } from "../redux/homeSlice"
import CheckboxIcon from "./CheckboxIcon"



const Navigation = ({ currentScreen, navIcons }) => {
    const dispatch = useDispatch()

    return (
        <Box
            sx={{
                bgcolor: "white",
                border: "1px white solid",
                borderRadius: 10,
                width: "max-content",
                display: "flex",
                p: 1.5,
                pt: 0,
                pb: 0
            }}
        >
            {
                navIcons.map(item => {
                    return <CheckboxIcon
                        key={item.name}
                        color={item.color}
                        checked={currentScreen === item.name}
                        onClick={() => dispatch(setCurrentScreen({ screen: item.name }))}
                        Icon={<item.icon />}
                        OutlinedIcon={<item.outlinedIcon />}
                    />
                })
            }
        </Box>
    )
}

export default Navigation