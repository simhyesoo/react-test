import React, { createContext, useReducer, useState } from 'react';
export const Store = createContext(null);

export function MyContext({ children }) {

    function reducer(state, action) {
        //일시키는 공장
        switch (action.type) {
            case 'insert':
                return state = { ...state, name: action.name }
        }
    }

    const [data, dispatch] = useReducer(
        reducer,
        { name: '홍길동', tel: '100-5448-4778' }
    )

    return (
        <Store.Provider value={{ data, dispatch }}>
            {children}
        </Store.Provider>
    );
}
