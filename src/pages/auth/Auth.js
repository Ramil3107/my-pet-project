import { NavLink, Outlet } from "react-router-dom"


const Auth = () => {
    return (
        <>
            <div style={{textAlign:"center"}}>
                <div>
                    <NavLink to="signin">SignIn</NavLink>
                </div>

                <div>
                    <NavLink to="signup">SignUp</NavLink>
                </div>
            </div>

            <div>
                <Outlet />
            </div>
        </>

    )
}

export default Auth