import React from 'react'
import { useCountRenders } from './useCountRenders'

export const Welcome = React.memo(({ n, increment }) => {
    useCountRenders()
    return (
        <div>
            <button onClick={() => increment(n)}>{n}</button>
        </div>
    )
})
