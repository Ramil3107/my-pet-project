import { NavLink, useNavigate, useOutletContext } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser, signUpThunk } from "../redux/userSlice";

import { Box, Typography } from "@mui/material";


const SignUp = () => {

    const { setValue } = useOutletContext()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const SignUpHandler = (email, password) => {
        const data = { email, password, navigate }
        dispatch(signUpThunk(data))
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
                Sign Up
            </Typography>
            <div>
                <Form title={"Sign Up"}
                    submitHandler={SignUpHandler}
                />
            </div>
            <Typography
                variant="subtitle1"
                color="textSecondary"
                component="p"
                align="left"
            >
                Already a user?
                <NavLink onClick={() => setValue("1")} to="/auth/signin">Sign In</NavLink>
            </Typography>
        </Box>
    )
}


export default SignUp