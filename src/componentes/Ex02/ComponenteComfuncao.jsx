import React, { Component } from 'react';

export default props => {
    const aprovados = ['Gleidson', 'Guilherme', 'Paulo']
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }
    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )




}
