import { Article, ArticleOutlined, Home, HomeOutlined, Newspaper, NewspaperOutlined, Person, PersonOutline } from "@mui/icons-material"
import { Box, Checkbox } from "@mui/material"
import { style } from "@mui/system"
import { NavLink, useNavigate } from "react-router-dom"

const HomeCheckboxIcon = ({ Icon, OutlinedIcon }) => {
    const navigate = useNavigate()
    return (
        <Checkbox
        size="large"
            sx={{ p: 2 }}
            checkedIcon={Icon}
            icon={OutlinedIcon}
        />
    )
}

const Navigation = () => {

    return (
        <Box sx={{ border: "1px white solid", borderRadius: 10, width: "max-content", display: "flex" , p:1.5 , pt:0, pb:0}}>
            <HomeCheckboxIcon Icon={<Home />} OutlinedIcon={<HomeOutlined />} />
            <HomeCheckboxIcon Icon={<Article />} OutlinedIcon={<ArticleOutlined />} />
            <HomeCheckboxIcon Icon={<Person />} OutlinedIcon={<PersonOutline />} />
            <HomeCheckboxIcon Icon={<Newspaper />} OutlinedIcon={<NewspaperOutlined />} />
            {/* <NavLink to="home"><HomeCheckboxIcon /></NavLink>
            <NavLink to="home"><HomeCheckboxIcon /></NavLink> */}
        </Box>
    )
}

export default Navigation