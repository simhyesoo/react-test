import React, { useEffect, useState } from 'react';

import json from '../data.json';
import { useLocation } from 'react-router-dom';

function Media() {
    const locate = useLocation();

    const [data, setData] = useState([]);

    useEffect(function () {
        setData(json[locate.state])
    }, [locate.state]);



    return (
        <>
            <button onClick="">←</button>
            <ul>
                {
                    data.map((obj) => {
                        return (

                            <li>
                                <p><img src={obj.photo}></img></p>
                                <p>{obj.name}</p>
                            </li>

                        )
                    })
                }
            </ul>
        </>
    )
}

export default Media