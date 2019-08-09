import React from 'react'

const CompA = props =>
<h1>Primeiro diz {props.valor}</h1>

const CompB = props =>
<h1>Segundo diz {props.valor}</h1>


//Exportando o componente CompA e CompB
export {CompA,CompB}

//Exportando somente o componente CompA
//export default CompA