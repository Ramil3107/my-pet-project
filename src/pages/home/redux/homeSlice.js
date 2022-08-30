import { createSlice } from "@reduxjs/toolkit";
import CVpage from "../../../assets/homePage/CVpage.png"
import homePageImg from "../../../assets/homePage/homePageImg.png"
import profileImg from "../../../assets/homePage/profileImg.png"
import newsImg from "../../../assets/homePage/newsImg.png"
import enjoyItImg from "../../../assets/homePage/enjoyItImg.png"
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

const initialState = {
    pages: [
        {
            title: "Home",
            description: `Your first stop at my site! You are now on the home page. Here I talk about the existing pages in my application and how to interact with it. At the bottom of the page you can notice the navigation buttons, by clicking on which you can read the information about each page. Also by clicking on the button 'Show Me!' (disable here) you can go to the page you are interested in.This application was created for fun and for the practice of my skills.Thanks and enjoy it!`,
            buttonText: "You Already Here",
            img: homePageImg,
            bgcolor: "#ffbfba",
            isDisabled: true
        },
        {
            title: "Resume",
            description: "Yes, this page is about me and no, I'm not a narcissist, haha. On this page you can see what I am studying now and what technologies and services I have come across. Also here you can read a little about my pet projects and follow the link to see.There is also boring information about my education and the languages I speak haha.",
            buttonText: "Show Me",
            img: CVpage,
            bgcolor: "#f4cca1",
            isDisabled: false
        },
        {
            title: "Profile",
            description: "This is your space and only yours. The so-called user information. Add your avatar (feel free), first name, last name and nickname so that my app remembers you. Do this and it will start saying hello to you, on every page! My pet app is shy to contact you without knowing your name, so don't embarrass him =)",
            buttonText: "Show Me",
            img: profileImg,
            bgcolor: "#b8d5fb",
            isDisabled: false
        },
        {
            title: "Notes",
            description: "Nice page where you can add and remove notes for your profile.ы",
            buttonText: "Show Me",
            img: newsImg,
            bgcolor: "#79c1d9",
            isDisabled: false
        },
        {
            title: "Enjoy It",
            description: "An interesting page where you can get acquainted with the components of the Material library, on the basis of which 95% of the user interface of this application is written. I will also introduce you to the principles of Flux architecture in my view. On this page I compare native html elements and material components using redux and react forms hook. Hope you will enjoy!",
            buttonText: "Hmm, Interesting...",
            img: enjoyItImg,
            bgcolor: "#ca97d4",
            isDisabled: false
        }
    ],
    navIcons:[
        {
            color: "#ff796e",
            name: "home",
            icon: Home,
            outlinedIcon: HomeOutlined
        },
        {
            color: "#f1a350",
            name: "resume",
            icon: Article,
            outlinedIcon: ArticleOutlined
        },
        {
            color: "#2e5c9a",
            name: "profile",
            icon: Person,
            outlinedIcon: PersonOutline
        },
        {
            color: "#3085a1",
            name: "notes",
            icon: NewReleases,
            outlinedIcon: NewReleasesOutlined
        },
        {
            color: "#6e4975",
            name: "fun",
            icon: Lightbulb,
            outlinedIcon: LightbulbOutlined
        }
    ],
    currentScreen: "home"
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setCurrentScreen(state, action) {
            state.currentScreen = action.payload.screen
        },

    }
})



export default homeSlice.reducer
export const { setCurrentScreen } = homeSlice.actions