import React from 'react';

//obj.state && 'done'
//obj.state == true ? 'done' : ''
function Item({ obj, remove, isDone, update }) {

    return (
        <li className={obj.state ? 'done' : ''}>
            {obj.todo}
            <button onClick={() => { update(obj.id) }}>수정</button>
            <button onClick={() => { remove(obj.id) }}>삭제</button>
            <button onClick={() => { isDone(obj.id) }}>완료</button>
        </li>
    );
}

export default Item;