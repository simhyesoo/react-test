import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  const instance = axios.create({
    baseURL: 'http://localhost:3334/test',
    timeout: 1000
  });

  const getData = async () => {
    await instance.get('/')
      .then(res => {
        console.log(res.data)
      })

    /* let data = await instance.get('/'); */

    /*  
      new Promise((resolve, reject)=>{
          setTimeout(()=>{
            resolve('성공')
          },1000)
      })
      .then(res=>{
          console.log(res);
      })
    */

    // Promise.all([instance.get('/101'), instance.get('/')])
    //   .then((result) => {
    //     console.log(result)
    //   })
  }
  // getData();


  const postData = async (d) => {
    // console.log("params", d)
    await instance.post('/', d)
      .then(res => {
        console.log(res)
        getList();
      })
  }


  const deleteData = async (id) => {
    console.log(id)
    instance.delete(`/` + id)
      .then(res => {
        getList();
      })
  }

  const onDeleteHandler = (id) => {
    // console.log("id", id)
    deleteData(id);

  }


  const onChangeHandler = (e) => {
    setText("")
    // console.log("value", e.target.value)
    setText(e.target.value)
  }

  const onClickHandler = (e) => {
    e.preventDefault();
    if (text === '') return;

    // const today = new Date();
    var params = { id: Date.now().toString(), name: text }

    postData(params);

  }

  const getList = async () => {
    await instance.get('/')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
  }


  useEffect(() => {
    getList();
  }, [])


  return (
    <div>
      <article>
        <h2>글쓰기</h2>
        {/* <form> */}
        <input type="text" name="name" value={text} onChange={onChangeHandler} />
        <input type="button" onClick={onClickHandler} value='저장' />
        {/* </form> */}
      </article>
      <article>
        <h2>리스트</h2>
        <ul>
          {/* <li>
            <button>삭제</button>
          </li> */}
          {
            data.map((obj => {
              return <li key={obj.id}>
                {obj.name}
                <button onClick={() => { onDeleteHandler(obj.id) }}>삭제</button>
              </li>
            }))
          }
        </ul>
      </article>
    </div>
  );
}

export default App;
