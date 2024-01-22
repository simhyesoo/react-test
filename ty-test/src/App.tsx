import React, { useRef, useState } from 'react';

import './App.css';
import Item from './Item';
import { initTy } from './model/dataType'



function App() {

  const init: initTy[] = [
    { id: 0, name: '홍길동', date: '2024-01-22' },
    { id: 1, name: '홍길순', date: '2024-01-22' }
  ]

  const [data, setData] = useState(init);
  const elForm = useRef<HTMLFormElement | null>(null);  //데이터가 2가지의 상황으로 들어올때,

  const save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (elForm.current) {                               //조건문으로 2가지의 상황으로 처리해주어야 함!~!
      const formData = new FormData(elForm.current);
      const name = formData.get('name')?.toString();    //값이 들어왔을때 문자로 만듦
      // console.log(Object.fromEntries(formData))

      const d = { id: 3, name: name, date: '2024-01-22' }
      setData([...data, d])
    }

  }

  return (
    <div className="App">
      <div>
        <form ref={elForm} onSubmit={save}>
          <input type="text" name="name"></input>
          <input type="submit" value="저장"></input>
        </form>
      </div>

      {
        data.map(obj => (
          <Item key={obj.id} obj={obj} />
        )
        )
      }
    </div>
  );
}

export default App;
