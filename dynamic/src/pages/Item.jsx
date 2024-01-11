import React from 'react';
import { useNavigate } from 'react-router-dom';


function Item({ obj, type }) {
    const navi = useNavigate();

    return (
        <li onClick={() => { navi(`/detail/${type}/${obj.id}`) }}>
            <p><img src={obj.photo}></img></p>
            <p>{obj.name}</p>
        </li>
    );
}

export default Item;