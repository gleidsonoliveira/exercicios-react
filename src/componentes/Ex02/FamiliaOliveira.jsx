import React from 'react'
import Membro from './Membro';


export default props =>
    <div>
        <p>
            <u>
                <b>
                    Relação entre componentes Familia e Membro
                </b>
            </u>
        </p>
        
        <Membro name="Gleidson" lastname="Oliveira" />
        <Membro name="Ana" lastname="Oliveira" />
        <Membro name="Valter" lastname="Oliveira" />
        <Membro name="Analia" lastname="Oliveira" />
        <hr/> 
    </div>