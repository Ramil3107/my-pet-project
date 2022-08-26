import { NavLink } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { signUpThunk } from "../redux/thunks";


const SignUp = () => {

    const dispatch = useDispatch()

    const SignUpHandler = (email, password) => {
        const data = { email, password }
        dispatch(signUpThunk(data))
    }

    return (
        <>
            <h1>Sign Up</h1>
            <div><Form title={"Sign Up"} submitHandler={SignUpHandler} /></div>
            <div>Already a user?<NavLink to="/auth/signin">Sign In</NavLink></div>
        </>
    )
}


export default SignUp