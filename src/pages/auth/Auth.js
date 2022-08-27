import { Box, Tab, Tabs } from "@mui/material"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { removeUser } from "./redux/userSlice"


const Auth = () => {

    const dispatch = useDispatch()
    const { isAuth, email } = useAuth()
    const [value, setValue] = useState('1');

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
            
            <Tabs
                sx={{mt:2}}
                centered
                value={value}
                onChange={handleChange}
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