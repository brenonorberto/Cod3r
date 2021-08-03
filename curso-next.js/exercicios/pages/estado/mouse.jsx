import { useState } from 'react'

export default function mouse() {
    const [x, alterarX] = useState(0)

    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }

    function quandoMover(ev) {
        alterarX(ev.clientX)
        alterarY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span><h1>Eixo X: {x}</h1></span>
            <span><h1>Eixo Y: {y}</h1></span>
        </div>
    )
}