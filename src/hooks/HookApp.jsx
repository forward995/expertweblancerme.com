import React, { useState, useRef, useLayoutEffect } from 'react';
import { useForm } from './useForm';
// import { useFetch } from './useFetch';
import { Hello } from './Hello';
import { useMeasure } from './useMeasure';

function HookApp() {
    const [values, handleChange] = useForm({name: "", email: "", password: ""})
    const [showHello, setShowHello] = useState(true)

    const inputRef = useRef();

    useLayoutEffect(() => {
        console.log(inputRef.current.getBoundingClientRect())
    }, [])

    const [rect, inputRef2] = useMeasure([])

    return (
        <div>
            <>
                <button onClick={() => setShowHello(!showHello)}>toggle</button>
                {showHello && <Hello />}
                <input 
                    ref={inputRef}
                    type="text" 
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                /><hr />
                <input 
                    ref={inputRef2}
                    type="text" 
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <pre>{JSON.stringify(rect, null, 2)}</pre>
                <hr />
                <input 
                    type="password" 
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
                <button onClick={() => {inputRef.current.focus()}}>Focus</button>
            </>
        </div>
    )
}

export { HookApp };