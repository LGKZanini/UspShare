import React from 'react';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BodyContainer } from '../components/body/style';
import { NavigationBar } from '../components/navigation-bar/navigation-bar';
import { DescricaoProfs } from '../components/descricao-profs/descricao-profs';
import { BreakLine } from '../components/fonts/fonts.style'

const pageName="Laboratório de Engenharia de software - PCS 3643 - Professores ";

const professorInfo = {
    name: 'Jorge Luiz Risco',
    email: 'jorge.becerra@poli.usp.br',
    pesquisas: [
       'Engenharia de Software e Banco de Dados',' Automação', 
       'Sistemas de Informação e Aplicações Computacionais'
    ],
}

export class AvaliacaoProfs extends React.Component {
    
    render(){
       return (
            <>
                <Header isLogged={true}/>
                <BodyContainer>
                    <NavigationBar pageName={pageName}/>
                    <DescricaoProfs professorInfo={professorInfo} />
                    <BreakLine numberLines={1} />
                    <Footer/>
                </BodyContainer>
               
            </>
       ); 
    }
}