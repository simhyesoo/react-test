import React from 'react';

function Total({ data }) {
    let total = 0;
    data.forEach((item) => {
        total += parseInt(item.price)
    })


    return (
        <div className='total'>
            <button>+</button>
            <p>2024년 입출금 내역</p>
            <p>{total}</p>
        </div>
    );
}

export default Total;