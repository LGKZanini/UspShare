import React from 'react';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BodyContainer } from '../components/body/style';
import { NavigationBar } from '../components/navigation_bar/navigation_bar';
import { DescricaoProfs } from '../components/descricaoProfs/descricaoProfs';

const pageName="Laboratório de Engenharia de software - PCS 3643 - Professores ";
const nomeProf="Jorge Luiz Risco";
const emailProf="jorge.becerra@poli.usp.br";
const pesquisasProf=" Engenharia de Software e Banco de Dados, Automação, Sistemas de Informação e Aplicações Computacionais"


export class AvaliacaoProfs extends React.Component {
    
    render(){
       return (
            <>
                <Header isLogged={true}/>
                <BodyContainer>
                    <NavigationBar pageName={pageName}/>
                    <DescricaoProfs nomeProf={nomeProf} emailProf={emailProf} pesquisasProf={pesquisasProf} />
                    {
                        //PROVISÓRIO
                    }
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <Footer/>
                </BodyContainer>
               
            </>
       ); 
    }
}