import { useState } from 'react';

export default function formulario() {
    const [ valor, setValor] = useState('')

    function alteraInput() {
        setValor(valor + "!")
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: "100vh"
        }}>
            <span>{valor}</span>
            <div style={{
                margin: "20px"
            }}>
                <input type="text" value={valor} 
                    onChange={event => setValor(event.target.value)}
                />
            </div>
            <button onClick={alteraInput}>Alterar</button>
        </div>
    )
}