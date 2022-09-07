import { NavLink, useOutletContext } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { signUpThunk } from "../redux/thunks";
import { Box, Typography } from "@mui/material";


const SignUp = () => {

    const { setValue } = useOutletContext()
    const dispatch = useDispatch()

    const SignUpHandler = (email, password) => {
        const data = { email, password }
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