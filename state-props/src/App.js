import { HashRouter, Route, Routes, Link } from 'react-router-dom';


import Home from './pages/Home';
import Product from './pages/Product';
import './state-props.scss';



function App() {
  return (
    <HashRouter>
      <header>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/Product" state={'movie'}>MOVIE</Link>
          <Link to="/Product" state={'game'}>GAME</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
