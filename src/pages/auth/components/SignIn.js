import { NavLink } from "react-router-dom"
import Form from "./Form"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";



const SignIn = () => {

    const dispatch = useDispatch()

    const SignInHandler = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                }))
            })
            .catch((error) => {
                alert(error.message)
            });

    }

    return (
        <>
            <h1>Sign In</h1>
            <div><Form title={"Sign In"} submitHandler={SignInHandler} /></div>
            <div>Need an account?<NavLink to="signup">Sign Up</NavLink></div>
        </>
    )
}


export default SignIn