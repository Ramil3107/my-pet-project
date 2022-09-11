import { Box, Tab, Tabs } from "@mui/material"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import Loader from "../../common/Loader/Loader"




const Auth = () => {
    const location = useLocation()
    const { isAuth } = useAuth()
    const [value, setValue] = useState('1');
    const status = useSelector(state => state.user.statuses.authStatus)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <>
            {
                status === "loading" ?
                    <Loader />
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
                            <Outlet context={{ setValue }} />
                        </Box>
                    </Box>
            }
        </>
    )
}

export default Auth