import { NavLink } from "react-router-dom"



const SignIn = () => {
    return (
        <>
        <h1>Sign In</h1>
        <div>Need an account?<NavLink to="signup">Sign Up</NavLink></div>
        </>
    )
}


export default SignIn