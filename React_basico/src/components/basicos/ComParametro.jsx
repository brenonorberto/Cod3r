import React from 'react';

export default props => // props são os parâmetros, e são somente leitura, não pode mudar
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
    </>