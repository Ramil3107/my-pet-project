import { AppBar, Avatar, Box, Button, Menu, MenuItem, Toolbar } from "@mui/material"
import { getAuth } from "firebase/auth"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import paw from "../assets/iconsPNG/paw.png"
import { useAuth } from "../hooks/useAuth"
import { removeUser } from "../pages/auth/redux/userSlice"




const Layout = () => {

    const { photoURL } = useAuth()
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = getAuth()
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutHandler = () => {
        dispatch(removeUser())
        auth.signOut()
    }

    return (
        <>
            <AppBar elevation={1} position="relative">
                <Toolbar sx={{ display: "flex", flexWrap: "wrap" }} >
                    <img
                        onClick={() => navigate("home")}
                        style={{ marginRight: "auto", cursor: "pointer" }}
                        width={60}
                        src={paw}
                    />
                    <Box sx={{ width: "50%", minWidth: 350, display: "flex", justifyContent: "space-around" }}>
                        <Button component={NavLink} to="home" variant="outlined" color="secondary">
                            Home
                        </Button>
                        <Button component={NavLink} to="resume" variant="outlined" color="secondary">
                            Resume
                        </Button>
                        <Button component={NavLink} to="profile" variant="outlined" color="secondary">
                            Profile
                        </Button>
                        <Button component={NavLink} to="notes/mynotes" variant="outlined" color="secondary">
                            Notes
                        </Button>
                        <Button component={NavLink} to="enjoy" variant="outlined" color="secondary">
                            Enjoy
                        </Button>
                    </Box>
                    <Avatar
                        id="basic-avatar"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        src={photoURL}
                        sx={{ ml: "auto", cursor: "pointer" }}
                    >
                        A
                    </Avatar>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-avatar',
                        }}
                    >
                        <MenuItem onClick={() => navigate("profile")}>Profile</MenuItem>
                        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    )
}

export default Layout