import React, { useState } from 'react';

export default props => {
    const [ numeros, setNumeros ] = useState(Array(props.qtdeNumero).fill(0))

    function gerarNumerosNaoContidos(array) {
        const min = 1
        const max = 60
        const novoNumeros =parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumeros)
            ? gerarNumerosNaoContidos(array) : novoNumeros
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumero)
            .fill(0)
            .reduce((arrayAcumulado, elementoAtual) => {
                const novoNumero = gerarNumerosNaoContidos(arrayAcumulado)
                return [...arrayAcumulado, novoNumero]
            }, [])
            .sort((a, b) => a - b)
        setNumeros(novoArray)    
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </>
    )
}