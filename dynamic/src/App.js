import { HashRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Media from './pages/Media';
import Detail from './pages/Detail';
import './dynamic.scss';
import './App.css';


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Media" element={<Media />}></Route>
          <Route path="/detail/:type/:id" element={<Detail />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
