
import React, { useEffect, useState } from 'react';
import json from '../data.json';
import Item from '../component/Item';
import { useLocation } from 'react-router-dom';


function Props(props) {
    const locate = useLocation();
    //console.log(locate)

    const [data, setData] = useState([]);

    useEffect(function () {          //useEffect 값을 받고 재실행함
        setData(json[locate.state])
    }, [locate.state]);  // 의존성배열[locate.state] 데이터의 값이 변경

    return (
        <>
            <ul>
                {
                    data.map((obj) => {
                        return <Item key={obj.id} obj={obj} />
                    })
                }
            </ul>
        </>
    );
}

export default Props;