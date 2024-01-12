import './App.css';
import './common.scss';
import Total from './component/Total';
import List from './component/List';
import Register from './component/Register';
import { useState } from 'react';

function App() {
  const initial = [];

  const [data, setData] = useState([]);

  function changeData(list) {
    setData([...data, list])
  }

  function total() {

  }


  return (
    <>
      <div className='account'>
        <Total data={data} />

        <List data={data} />

      </div>

      <Register changeData={changeData} />


    </>

  );
}

export default App;



// 버튼 클릭하면 이벤트가 발생!
// ->이벤트 대상은 form
// ->form 에 입력한 값을 가져옴(onSubmit)



// Register 값을 부모(App.js) List 에 보내고
// -> List 에서 부모의 값을 받음.



// ->가져온 값을 list 에 출력
// List 에서 Register 의 form 값을 가져와야함.



// 합계
// ->부모에서 data 를 받아오고
// ->forEach


// 예금 +1000
// 출금 -1000