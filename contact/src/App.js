import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Mycontext } from './component/Mycontext';
import Write from './component/Write';
import List from './component/List';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Contact US</Link>
        <Link to="/list">List</Link>
      </header>

      <Mycontext>
        <Routes>
          <Route  path="/"  element={<Write/>}/>
          <Route  path="/list"  element={<List/>}/>
        </Routes>
      </Mycontext>
    </BrowserRouter>

    
  );
}

export default App;
