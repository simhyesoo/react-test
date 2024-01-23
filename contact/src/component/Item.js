import React from 'react';

function Item({obj, dispatch}) {
    return (
        <li>
            [{obj.name}/{obj.email}] 
            {obj.contact}
            <button onClick={
                ()=>{ 
                    dispatch({type:'delete',id:obj.id}) 
                }
            }>삭제</button>
        </li>
    );
}

export default Item;