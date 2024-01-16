import React, { useContext } from 'react';
import { Store } from './MyContext';

function Item({ children }) {

    const { data, dispatch } = useContext(Store);

    return (
        <div>
            {children}
            이름은 - {data.name}
            <button onClick={() => { dispatch({ type: 'insert', name: '누렁이' }) }}>
                수정
            </button>
        </div>
    );
}

export default Item;