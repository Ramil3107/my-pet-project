import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { Notes } from './pages/notes/Notes';
import Create from './pages/notes/componets/Create';
import MyNotes from './pages/notes/componets/MyNotes';
import Auth from './pages/auth/Auth';
import SignIn from './pages/auth/components/SignIn';
import SignUp from './pages/auth/components/SignUp';

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
  return (
    <ThemeProvider theme={theme}>
      <Routes>

        <Route path='auth' element={<Auth />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path='notes' element={<Notes />} >
          <Route path='create' element={<Create />} />
          <Route path='mynotes' element={<MyNotes />} />
        </Route>

      </Routes>
    </ThemeProvider>
  );
}

export default App;
