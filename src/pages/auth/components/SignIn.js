import { NavLink, useNavigate, useOutletContext } from "react-router-dom"
import Form from "./Form"
import { useDispatch } from "react-redux";

import { Alert, Box, Typography } from "@mui/material";
import { useState } from "react";
import { signInThunk } from "../redux/userSlice";



const SignIn = () => {

    const { setValue } = useOutletContext()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signInHandler = (email, password) => {
        const data = { email, password, navigate }
        dispatch(signInThunk(data))
    }

    return (
        <Box
            component="div"
            sx={{ width: "65ch" }}
            pt={10}
        >
            <Typography
                variant="h4"
                color="textSecondary"
                component="h2"
            >
                Sign In
            </Typography>
            <div >
                <Form
                    title={"Sign In"}
                    submitHandler={signInHandler}
                />
            </div>
            <Typography
                variant="subtitle1"
                color="textSecondary"
                component="p"
                align="left">
                Need an account?
                <NavLink onClick={() => setValue("2")} to="/auth/signup">Sign Up</NavLink>
            </Typography>
            <Box
                component="div"
                align="left">
                <Alert
                    sx={{ mt: 3, fontSize: 13, width: "max-content", textAlign: "left" }}
                    severity={"info"}
                >
                    Please Sign In to visit website.
                </Alert>
            </Box>
        </Box>
    )
}


export default SignIn