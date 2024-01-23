import React,{createContext, useReducer} from 'react';
const Store = createContext();

function Mycontext({children}) {

    function reducer(state, action){
        switch(action.type){
            case 'insert' :
            return state = [...state, action.d];
            case 'delete' : 
            return state = state.filter((obj)=> obj.id !== action.id)
        }
    }

    const [data,dispatch] = useReducer(reducer,[]);

    
    return (
        <Store.Provider  value={{data, dispatch}}>
            {children}
        </Store.Provider>
    );
}

export {Mycontext, Store};