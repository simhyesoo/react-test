import React from 'react';



export type initTy = {
    // id: number,
    // name: string | undefined,
    // date: string

    [a: string]: string | number | undefined  //여러개 속성의 값을 한줄로 타입 지정 가능! 속성: [] 배열로 , 값 | 또는
}


export type objTy = {
    obj: {
        id: number,
        name: string,
        date: string
    }
}

