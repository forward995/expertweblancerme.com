import React, { useState, useCallback, useReducer } from 'react'
import { Welcome } from './Welcome'

function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default: 
            return state    
    }
}

function Hook() {
    const [count, setCount] = useState(0)

    const favorite = [7, 21, 35]

    const increment = useCallback(n => {
        setCount(c => c + n)
    }, [setCount])

    const [currentCount, dispatch] = useReducer(reducer, 0)
 
    return (
        <div>
            <Welcome increment={increment}/>
            <div>count: {count} / {currentCount}</div>
            {
                favorite.map(item => (
                    <Welcome increment={increment} n={item} key={item} />
                ))
            }
            <button onClick={() => dispatch({ type: 'increment'})}>+</button>
            <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
        </div>
    )
}

export {Hook};