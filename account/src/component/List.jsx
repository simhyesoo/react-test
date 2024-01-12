import React from 'react';
// import Register from 'Register';

function List({ data }) {
    return (
        <div className='list'>
            <ul>
                {data.map((list) => {

                    return <li>
                        <p>{list.date}</p>
                        <p>{list.message}</p>
                        <p>{list.price}</p>
                    </li>
                })
                }
            </ul>
        </div>
    );
}

export default List;