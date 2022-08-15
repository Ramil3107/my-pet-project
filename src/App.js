import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Notes from './components/Notes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Notes />} />
      <Route path='create' element={<Create  />} />
    </Routes>
  );  
}

export default App;
