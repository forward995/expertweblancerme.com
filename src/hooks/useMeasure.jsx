import {useState, useLayoutEffect, useRef} from 'react';

export const useMeasure = (deps) => {
    const [rect, setRect] = useState({})

    const myRef = useRef()

    useLayoutEffect(() => {
        setRect(myRef.current.getBoundingClientRect())
    }, deps)

    return [rect, myRef]
}