import React from 'react';
import Filho from './Filho'

export default props => {
    const notificarSaidaDoFilho = lugar => alert(`Liberado Saída ${lugar}`)

    return (
        <div>
            <Filho notificarSaida={notificarSaidaDoFilho}></Filho>
        </div>
    )
}