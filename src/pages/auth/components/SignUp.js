import { NavLink } from "react-router-dom"



const SignUp = () => {
    return (
        <>
        <h1>Sign Up</h1>
        <div>Already a user?<NavLink  to="signin">Sign In</NavLink></div>
        </>
    )
}


export default SignUp