import React from 'react'

function Item({ obj }) {
    return (
        <li>
            <p>{obj.photo}</p>
            <p>{obj.product}</p>
            <p>{obj.price}</p>
        </li>
    )
}

export default Item