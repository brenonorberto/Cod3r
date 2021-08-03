import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return (
        <div>
            <Titulo 
                principal="Página de cadastro"
                secundario="Incluir, Alterar e Excluir"
            />
            <Titulo 
                principal="Página de Login"
                secundario="Informe o seu email e senha"
                pequeno={true}
            />
            <Titulo 
                principal="Página de Login"
                secundario="Informe o seu email e senha"
                pequeno
            />
        </div>
    )
}