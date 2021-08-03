import { useState } from 'react'



export default function contador() {
    const [ valor, setValor ] = useState(0)

    function increment() {
        setValor(valor + 1)
    }

    function decrement() {
        setValor(valor - 1)
    }

    return (
        <div>
            <h1>Contador</h1>
            <div>Valor: {valor}</div>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}