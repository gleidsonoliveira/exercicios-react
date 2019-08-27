import React, { Component } from 'react';

// import { Container } from './styles';

export default class ComponenteClasse extends Component {
    render() 
    {
        return (
            <h1>{this.props.valor || "Padrão"}</h1>
        );
    }
}
