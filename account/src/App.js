import './App.css';
import './common.scss';

function App() {
  return (
    <div className='account'>

      <div className='total'>
        <p>2024년 입출금 내역</p>
        <p>35,000,000</p>
      </div>

      <div className='list'>
        <ul>
          <li>
            <p>1.17</p>
            <p>강남역 커피빈</p>
            <p>-5,200</p>
          </li>
        </ul>
      </div>

      <div className='register'>
        <h2>등록하기</h2>
        <input type='text'></input>
        <input type='text'></input>
        <button>예금하기</button>
        <button>출금하기</button>
      </div>

    </div>



  );
}

export default App;
