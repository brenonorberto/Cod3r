export function getStaticProps() {
    return {
        revalidate: 7, // método para gerar um novo valor estático, a cada 7s no exemplo
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props) {
    return (
        <div>
            <h1>Estático #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}