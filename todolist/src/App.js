import { useState } from 'react';
import './common.scss';
import './App.css';
import List from './comp/List';
import Write from './comp/Write';

function App() {
  const initial = [
    //{ id: 0, todo: '리액트공부하기', state: false }
  ];

  const [data, setData] = useState(initial);

  let insert = (d, type) => {
    // console.log(d)
    if (type === 'insert') {
      //insert
      setData([...data, d]);
    } else {
      //update
      let a = data.map((obj) => {
        if (obj.id === updateItem.id) {
          obj.todo = d.todo;
        }
        return obj;
      });
      setData(a);
      setUpdateItem('')
    }
  }

  let remove = (id) => {
    let d = data.filter((obj) => {
      return obj.id !== id
    })
    setData(d);
  }

  let isDone = (id) => {
    let d = data.map((obj) => {
      if (obj.id === id) {
        obj.state = !obj.state;
      }
      return obj;
    })
    setData(d);
  }


  let [updateItem, setUpdateItem] = useState();

  function update(id) {
    let d = data.filter((obj) => {
      return obj.id === id
    })
    setUpdateItem(...d);
  }

  let dataEa = data.filter((obj) => {
    return obj.state === false
  })

  return (
    <div className='todolist'>
      <h2>Todolist</h2>
      <p>할일 {dataEa.length}개 남음</p>
      <List data={data} remove={remove} isDone={isDone} update={update} />
      <Write insert={insert} updateItem={updateItem} />
    </div>
  );
}

export default App;
