import React,{useContext} from 'react';
import Item from './Item';
import { Store } from './Mycontext';

function List(props) {
    const {data,dispatch} = useContext(Store)


    return (
        <div>
            <h2>List</h2>
            <ul>
                {
                    data.map(obj=>( 
                        <Item key={obj.id} obj={obj} dispatch={dispatch}/>
                    ))
                }
            </ul>
        </div>
    );
}

export default List;