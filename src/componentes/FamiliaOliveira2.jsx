import React from 'react'
import Membro from './Membro';


export default props =>
    <div>
        <p>
            <u>
                <b>
                    Relação entre componentes FamiliaOliveira e Membro, passando propriedades via props
                </b>
            </u>
        </p>
        <Membro name="Gleidson" lastname={props.lastname} />
        <Membro name="Ana" lastname={props.lastname} />
        <Membro name="Valter" lastname={props.lastname} />
        <Membro name="Analia" lastname={props.lastname} />
        <hr/> 
    </div>