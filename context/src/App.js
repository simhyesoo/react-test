import './App.css';
import Item from './component/Item';
import { MyContext } from './component/MyContext';

function App() {
  return (
    <MyContext>
      <div className="App">
        <Item>
          <h2> 전역으로 관리할 데이터 </h2>
        </Item>
      </div>
    </MyContext>
  );
}

export default App;
