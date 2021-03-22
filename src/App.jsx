import React from 'react';
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai';

export default (props) => (
    <div className="App">
        <Card titulo='#01 - Primeiro Componente' color='#FA6900'>
        <Primeiro />
        </Card>
        <Card titulo='#02 - Componente Com Parâmetro' color='#E94C6F'>
            <ComParametro titulo='Esse é o Titulo' subtitulo='Esse é o Subtitulo' />
            <ComParametro titulo='Opa' subtitulo='Epa' />
        </Card>
        <Card titulo='#03 - Componente Com Filhos' color='#008BBA'>
            <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Karla</li>
                <li>Bianca</li>
            </ul>
            </ComFilhos>    
        </Card>
        <Card titulo='#04 - Repetição' color='#D96459'>
        <Repeticao />
        </Card>
        <Card titulo='#05 - Condicional v1' color='#FF85CB'>
        <Condicional numero={3}/>
        </Card>
        <Card titulo='#06 - Condicional v2' color='#92B0CA'>
        <CondicionalComIf numero={10}/>
        </Card>
        <Card titulo='#07 - Comunicação Direta' color='#4298B5'>
        <Pai sobrenome='Freitas'/>
        </Card>
  </div>
)

