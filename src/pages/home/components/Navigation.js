import {
    Article,
    ArticleOutlined,
    Home, HomeOutlined,
    Lightbulb,
    LightbulbOutlined,
    NewReleases,
    NewReleasesOutlined,
    Person,
    PersonOutline,
} from "@mui/icons-material"
import { Box } from "@mui/material"
import { useDispatch } from "react-redux"
import { setCurrentScreen } from "../redux/homeSlice"
import CheckboxIcon from "./CheckboxIcon"



const Navigation = ({ currentScreen }) => {
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
            <CheckboxIcon
                color={"#ff796e"}
                checked={currentScreen === "home"}
                onClick={() => dispatch(setCurrentScreen({ screen: "home" }))}
                Icon={<Home />}
                OutlinedIcon={<HomeOutlined />} />
            <CheckboxIcon
                color={"#f1a350"}
                checked={currentScreen === "resume"}
                onClick={() => dispatch(setCurrentScreen({ screen: "resume" }))}
                Icon={<Article />}
                OutlinedIcon={<ArticleOutlined />} />
            <CheckboxIcon
                color={"#2e5c9a"}
                checked={currentScreen === "profile"}
                onClick={() => dispatch(setCurrentScreen({ screen: "profile" }))}
                Icon={<Person />}
                OutlinedIcon={<PersonOutline />} />
            <CheckboxIcon
                color={"#3085a1"}
                checked={currentScreen === "news"}
                onClick={() => dispatch(setCurrentScreen({ screen: "news" }))}
                Icon={<NewReleases />}
                OutlinedIcon={<NewReleasesOutlined />} />
            <CheckboxIcon
                color={"#6e4975"}
                checked={currentScreen === "secret"}
                onClick={() => dispatch(setCurrentScreen({ screen: "secret" }))}
                Icon={<Lightbulb />}
                OutlinedIcon={<LightbulbOutlined />} />
        </Box>
    )
}

export default Navigation