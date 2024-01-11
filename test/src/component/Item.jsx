import { useState } from 'react'; // {useState}  Hook

function Item({ obj, set }) {

    return (  //item 컴포넌트로 분리
        <li key={obj.id}>
            <p>{obj.photo}</p>
            <button onClick={() => { set(obj.id) }}>좋아요{obj.like}</button>
        </li >
    );
}

export default Item;