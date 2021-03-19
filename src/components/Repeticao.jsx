import React from 'react';

import produto from '../data/produtos'

export default props => {
    function getProdutosListItens() {
        return produto.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.name} -> R$ {prod.preco}
            </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItens()}
            </ul>
        </div>
    )
}