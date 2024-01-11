import React, { useState } from 'react';
import json from '../data.json';
import Item from '../component/Item';

function Props(props) {

    const [data, setData] = useState(json); // [데이터값, 수정값]

    let likeFun = (id) => {          //증가시킬 id 가 넘어오고 
        let d = data.map((obj) => {  // id 값을 찾고, map 반복하면서 해당값을 찾고 리턴시킴
            if (obj.id == id) {
                obj.like += 1;
            }
            return obj;
        })
        setData(d);
    }

    return (
        <div>
            <h2>리스트</h2>
            <ul>
                {
                    data.map((obj) => { //map 반복문 실행
                        return <Item key={obj.id} obj={obj} set={likeFun} />
                    })
                }
            </ul>
        </div>
    )
}

export default Props