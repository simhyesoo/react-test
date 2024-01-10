import { HashRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Media from './pages/Media';
import './dynamic.scss';
import './App.css';


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Media" element={<Media />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
