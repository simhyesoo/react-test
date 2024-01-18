import { useEffect, useRef, useState } from 'react';
import { useStore } from './store';


function App() {
  const elInput = useRef();
  const [type, setType] = useState(true);
  const [id, setId] = useState();
  const { data, getData, postData, action, putData, deleteData, status } = useStore();
  useEffect(() => { getData() }, [])

  if (!status) return <>Loading...</>  //데이터가 들어오지 않을 때의 상태 
  // console.log(data);
  const onSaveHandler = () => {

    if (elInput.current.value === '') return;
    if (type) {
      const params = { id: (new Date()).getTime(), name: elInput.current.value }
      action('post', params);
    } else {
      const params = { id, name: elInput.current.value }
      putData(params);
    }
    setType(true)
  }

  const onUpdateHandler = (id) => {
    console.log(elInput.current.value);
    putData()
    // if (elInput.current.value === '') return;
    // const params = { id: id, name: elInput.current.value }

    // putData(params)
  }


  const onDeleteHandler = (id) => {
    // console.log("id =", id)
    deleteData(id);
  }
  return (
    <div className="App">
      <article>

        <>
          <input type="text" ref={elInput} />
          <button onClick={() => { onSaveHandler() }}>
            {type ? '저장' : '수정하기'}
          </button>
        </>


        <ul>
          {
            data.map((item) => {
              return <li key={item.id}>
                {item.name}
                <button onClick={() => { setType(false); setId(item.id) }}>수정</button>
                <button onClick={() => { onDeleteHandler(item.id) }}>삭제</button>
              </li>
            })
          }
        </ul>
      </article>
    </div>
  );
}

export default App;
