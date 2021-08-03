export default function Filho(props) {
    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Falar com pai #01</button>
            <button onClick={() => props.funcao("Passei no ENEM!")}>Falar com pai #02</button>
        </div>
    )
}