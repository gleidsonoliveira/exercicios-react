import React from 'react'

//Relação entre componentes Membro e Familia
export default props =>
    <div>
        {props.name}
        <strong> {props.lastname}</strong>
        <strong> {props.number}</strong>
    </div>