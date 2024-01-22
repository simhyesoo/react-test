import React from 'react'
// { id: 1, name: '홍길순', date: '2024-01-22' }
import { initTy } from './model/dataType'

interface Own {
    obj: initTy
}

function Item({ obj }: Own) {
    // console.log(obj)
    return (
        <p>
            {obj.name}
        </p>
    )
}
export default Item;