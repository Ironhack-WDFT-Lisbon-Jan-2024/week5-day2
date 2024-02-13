import './App.css'
import HomePage from './pages/HomePage';
import AlbumDetails from './pages/AlbumDetails';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <main>
      <Routes>
        {/* Route for Albums List */}
        <Route path="/" element={<HomePage/>}></Route>
        {/* Route for Album Details */}
        <Route path="/albums/:id" element={<AlbumDetails/>}></Route>
      </Routes>
    </main>
  );
}

export default App
