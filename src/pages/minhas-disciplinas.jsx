import React from 'react';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BodyContainer } from '../components/body/style';
import { NavigationBar } from '../components/navigation_bar/navigation_bar';
import { PageStyles } from '../components/page-styles/page-styles';
import { ButtonList } from '../components/library-list/button-list';
import { SearchBar } from '../components/search-box/search-box';
import { TitlePrinciple, SubTitle2, BreakLine}  from '../components/fonts/fonts.style';
import {
    PageTitle,
    Espacamento2
}from '../components/page-styles/page-styles.styles'



const pageName="Minhas Disciplinas";
const titulo="Adicione as disciplinas do seu semestre";
const title1="Semestre Atual"
const title2="Semestre 2"
const title3="Semestre 3"
const title4="Semestre 4"


export class MinhasDisciplinas extends React.Component {
    
    render(){
       return (
            <>
                <Header isLogged={true}/>
                <BodyContainer>
                    <NavigationBar pageName={pageName}/>
                    <PageStyles titulo={titulo}/>
                    <SubTitle2>Clique no semestre que deseja adicionar uma disciplina</SubTitle2>
                    <Espacamento2>
                        <SearchBar />
                    </Espacamento2>
                    <Espacamento2>
                        <ButtonList title={title1}/>
                        <ButtonList title={title2}/>
                        <ButtonList title={title3}/>
                        <ButtonList title={title4}/>
                    </Espacamento2>
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
                    <Footer/>
                </BodyContainer>
               
            </>
       ); 
    }
}