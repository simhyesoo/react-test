import React from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
    const { id, type } = useParams();

    console.log(id, type)


    return (
        <div>
            Detail
        </div>
    );
}

export default Detail;