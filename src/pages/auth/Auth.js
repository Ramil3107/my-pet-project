import { Box, Tab, Tabs } from "@mui/material"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { removeUser } from "./redux/userSlice"


const Auth = () => {

    const dispatch = useDispatch()
    const { isAuth, email } = useAuth()
    const [value, setValue] = useState('one');

    const logoutHandler = () => {
        dispatch(removeUser())

    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box
            component="div"
        >
            <Box
                component="div"
                mt={1}
            >
                <Tabs
                    centered
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                    indicatorColor="secondary"
                    textColor="secondary"
                >
                    <Tab
                        value="1"
                        label="Sign In"
                        component={NavLink}
                        to="signin"
                    />
                    <Tab
                        value="2"
                        label="Sign Up"
                        component={NavLink}
                        to="signup"
                    />
                </Tabs>
            </Box>
            {
                isAuth ?
                    <div>
                        <h1>Welcome {email}</h1>
                        <button onClick={logoutHandler}>Log Out</button>
                    </div>
                    :
                    <Box
                        component="div"
                        align="center"
                    >
                        <Outlet />
                    </Box>
            }
        </Box>

    )
}

export default Auth