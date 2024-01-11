import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import json from '../data.json';
import Item from './Item';

function Media() {
    const locate = useLocation();

    const [data, setData] = useState([]);

    useEffect(function () {
        setData(json[locate.state])
    }, [locate.state]);

    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{ duration: 1 }}>
            <>
                <button onClick={() => navigate('/')}>←</button>
                <h2>{locate.state}</h2>
                <ul>
                    {
                        data.map((obj, k) => {
                            return <motion.div
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: '0%', opacity: 1 }}
                                transition={{ damping: 10, duration: 0.5, delay: k * 0.2 }}>
                                <Item key={obj.id} obj={obj} type={locate.state} />
                            </motion.div>
                        })
                    }
                </ul>
            </>
        </motion.div>
    )
}

export default Media