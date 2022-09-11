import { useSelector } from "react-redux";


export function useAuth() {
    const { email, token, id, photoURL, displayName, creationTime, } = useSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id,
        photoURL,
        displayName,
        creationTime
    }
} 