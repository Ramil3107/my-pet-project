import { NavLink } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";


const SignUp = () => {

    const dispatch = useDispatch()

    const SignUpHandler = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email:user.email,
                    token:user.accessToken,
                    id:user.uid
                }))
            })
            .catch((error) => {
                alert(error.message)
            })
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