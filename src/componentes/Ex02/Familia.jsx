import React from 'react';
import childrenProps from '../../utils/utils'

export default props =>
    <div>
        <h1>Família - Propagando "props" para Componentes Filhos</h1>
        {
            childrenProps(props)
        }
        {
            //Melhor forma melhorada
            // React.Children.map(props.children, child => {
            //     return React.cloneElement(child, { ...props })
            // })
        }

        {
            //React.cloneElement(props.children, { lastname: props.lastname })

            //Forma de passar diretamente por referência
            //React.cloneElement(props.children, props)

            //Melhor forma de fazer para passar parametros para os componentes filhos por
            // "Spread Attributes" ou "clone" das propriedades
            // React.cloneElement(props.children, { ...props })

        }
    </div>