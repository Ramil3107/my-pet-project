import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Notes } from './pages/notes/Notes';
import Create from './pages/notes/componets/Create';
import MyNotes from './pages/notes/componets/MyNotes';
import Auth from './pages/auth/Auth';
import SignIn from './pages/auth/components/SignIn';
import SignUp from './pages/auth/components/SignUp';
import Resume from './pages/resume/Resume';
import Home from './pages/home/Home';
import Redux from './pages/enjoy/Redux';
import Material from './pages/enjoy/Material';
import ReactHookForm from './pages/enjoy/ReactHookForm';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuth } from './hooks/useAuth';
import { removeUser, setUser } from './pages/auth/redux/userSlice';
import { useDispatch } from 'react-redux';
import Profile from './pages/profile/Profile';

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe"
    },
    secondary: purple
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth()
  const { isAuth } = useAuth()




  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(setUser({
          photoURL: userAuth.photoURL,
          email: userAuth.email,
          token: userAuth.accessToken,
          id: userAuth.uid
        }))
      } else {
        dispatch(removeUser())
        auth.signOut()
        navigate("/auth/signin")
      }
    })
  }, [])



  return (
    <ThemeProvider theme={theme}>
      <Routes>

        <Route path='auth' element={<Auth />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>


        <Route path='home' element={<Home />} />

        <Route path='resume' element={<Resume />} />

        <Route path='notes' element={<Notes />} >
          <Route path='create' element={<Create />} />
          <Route path='mynotes' element={<MyNotes />} />
        </Route>

        <Route path='enjoy' element={<Material />} />
        <Route path='enjoy/redux' element={<Redux />} />
        <Route path='enjoy/hookform' element={<ReactHookForm />} />

        <Route path='profile' element={<Profile />} />


      </Routes>
    </ThemeProvider>
  )
}

export default App;
