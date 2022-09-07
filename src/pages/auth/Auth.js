import { Box, Tab, Tabs } from "@mui/material"
import React, { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import Profile from "../profile/Profile"





const Auth = () => {

    const { isAuth } = useAuth()
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <>
            {
                isAuth ?
                    <Profile />
                    :
                    <Box
                        component="div"
                    >

                        <Tabs
                            sx={{ mt: 2 }}
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
                        <Box
                            component="div"
                            align="center"
                        >
                            <Outlet />
                        </Box>
                    </Box>
            }
        </>
    )
}

export default Auth