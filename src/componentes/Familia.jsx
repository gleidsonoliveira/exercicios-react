import React from 'react';

export default props =>
    <div>
        <h1>Família - Propagando "props" para Componentes Filhos</h1>
        {
            React.cloneElement(props.children, { lastname: props.lastname })
        }
    </div>