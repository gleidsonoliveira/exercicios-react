import React from 'react'
import ReactDom from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { CompA, CompB as B } from './componentes/DoisComponentes'
// import MultElementos from './componentes/MultElementos'
import FamiliaOliveira2 from './componentes/FamiliaOliveira2'
import FamiliaOliveira from './componentes/FamiliaOliveira'
import  Familia from './componentes/Familia'
import Membro from './componentes/Membro';

//Exemplo da utilização do (JSX)
const elemento = document.getElementById('root');

ReactDom.render(
    <div>
        {/* Relação entre componentes */}
        <Familia lastname="Guilherme">
            <Membro name="Gleidson" />
        </Familia>
        <hr/>

        {/* Passa a propriedade "lastname" para o componente filtro, dentro de FamiliaOliveira via props */}
        <FamiliaOliveira2 lastname="Guilherme"/>
        
        <FamiliaOliveira/> 
        
        {/* <PrimeiroComponente valor='Bom dia!'></PrimeiroComponente>
        <CompA valor="Olá eu sou A."></CompA>
        <B valor="Olá eu sou B, e estou utilizando o alias."></B>
        <MultElementos />
    */}

    </div>
    , elemento);


/*Exemplo utilizando Javascript comum */

// const lista =document.createElement('ul');

// let item = document.createElement('li')
// let texto = document.createTextNode('1) - Pedro')
// item.appendChild(texto);
// lista.appendChild(item);

// item = document.createElement('li')
// texto = document.createTextNode('2) - Maria')
// item.appendChild(texto);
// lista.appendChild(item);

// item = document.createElement('li')
// texto = document.createTextNode('3) - Gleidson')
// item.appendChild(texto);
// lista.appendChild(item);

// const elemento = document.getElementById('root');
// elemento.appendChild(lista);




