import { useDispatch } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { removeUser } from "./redux/userSlice"


const Auth = () => {
    
    
    const dispatch = useDispatch()
    const { isAuth, email } = useAuth()

    const logoutHandler = () => {
        dispatch(removeUser())
        
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <div>
                    <NavLink to="signin">SignIn</NavLink>
                </div>

                <div>
                    <NavLink to="signup">SignUp</NavLink>
                </div>
            </div>

            {
                isAuth ?
                    <div>
                        <h1>Welcome {email}</h1>
                        <button onClick={logoutHandler}>Log Out</button>
                    </div>
                    :
                    <div>
                        <Outlet />
                    </div>
            }
        </>

    )
}

export default Auth