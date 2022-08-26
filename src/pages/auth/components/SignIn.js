import { NavLink } from "react-router-dom"
import Form from "./Form"
import { useDispatch } from "react-redux";
import { signInThunk } from "../redux/thunks";



const SignIn = () => {

    const dispatch = useDispatch()

    const signInHandler = (email, password) => {
        const data = {email,password}
        dispatch(signInThunk(data))
    }

    return (
        <>
            <h1>Sign In</h1>
            <div>
                <Form
                    title={"Sign In"}
                    submitHandler={signInHandler}
                />
            </div>
            <div>
                Need an account?
                <NavLink to="/auth/signup">Sign Up</NavLink>
            </div>
        </>
    )
}


export default SignIn