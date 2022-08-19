import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { Notes } from './pages/notes/Notes';
import Create from './pages/notes/componets/Create';
import MyNotes from './pages/notes/componets/MyNotes';

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
        <Route path='/' element={<Notes />} >
          <Route path='create' element={<Create />} />
          <Route path='notes' element={<MyNotes />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
