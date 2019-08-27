import React from 'react'

//Definição de um componente com "Arrow Function", recebendo valores via "props"
export default (props) => <h1>{props.valor}</h1>


/*Definição de um componente com Arrow Function
export default () => <h1>Primeiro Componente Arrow Function!</h1>*/

/*
    Definição de uma função anónima
    export default function ()
    {
        return <h1>Primeiro Componente!</h1>
    }
*/

/*
    Definição de uma função nomeada
    function primeiro()
    {
        return <h1>Primeiro Componente!</h1>
    }
    export default primeiro
*/