import React from 'react';

import { Header_log } from '../components/header_log/header_log';
import { Label } from '../components/label/label';
import { Footer } from '../components/footer/footer';
import { BodyContainer } from '../components/body/style';
import { NavigationBar } from '../components/navigation_bar/navigation_bar';
import { DescricaoProfs } from '../components/descricaoProfs/descricaoProfs';

const username="Arthur Bires";
const coursename="Engenharia de Computação";
const pageName="Laboratório de Engenharia de software - PCS 3643 - Professores ";
const nomeProf="Jorge Luiz Risco";
const emailProf="jorge.becerra@poli.usp.br";
const pesquisasProf=" Engenharia de Software e Banco de Dados, Automação, Sistemas de Informação e Aplicações Computacionais"


export class Avaliacao_profs extends React.Component {
    
    render(){
       return (
            <>
                <Header_log username={username} coursename = {coursename}/>
                <BodyContainer>
                    <NavigationBar pageName={pageName}/>
                    <DescricaoProfs nomeProf={nomeProf} emailProf={emailProf} pesquisasProf={pesquisasProf} />
                    <h1/>
                    <Footer/>
                </BodyContainer>
               
            </>
       ); 
    }
}