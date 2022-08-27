import { NavLink } from "react-router-dom"
import Form from "./Form"
import { useDispatch } from "react-redux";
import { signInThunk } from "../redux/thunks";
import { Alert, Box, Typography } from "@mui/material";
import { useState } from "react";



const SignIn = () => {

    const dispatch = useDispatch()

    const signInHandler = (email, password) => {
        const data = { email, password }
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
                <NavLink to="/auth/signup">Sign Up</NavLink>
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