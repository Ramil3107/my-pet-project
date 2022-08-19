import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { typography } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NotesLayout } from './pages/Notes/NotesLayout';
import Create from './pages/Notes/Create';
import Notes from './pages/Notes/Notes';

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
        <Route path='/' element={<NotesLayout />} >
          <Route path='create' element={<Create />} />
          <Route path='notes' element={<Notes />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
