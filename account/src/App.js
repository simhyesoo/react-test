import './App.css';
import './common.scss';
import Total from './component/Total';
import List from './component/List';

function App() {
  return (
    <>
      <div className='account'>
        <Total />

        <List />

      </div>



      <div className='register'>
        <button className='close'>X</button>
        <h2>등록하기</h2>
        <div className='write'>
          <form>
            <input type='text' placeholder='금액'></input>
            <input type='text' placeholder='메세지'></input>
          </form>
        </div>

        <div className='btn'>
          <button>예금하기</button>
          <button>출금하기</button>
        </div>

      </div>
    </>

  );
}

export default App;
