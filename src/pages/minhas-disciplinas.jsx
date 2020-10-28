import React from 'react';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BodyContainer } from '../components/body/style';
import { NavigationBar } from '../components/navigation-bar/navigation-bar';
import { PageStyles } from '../components/page-styles/page-styles';
import { ButtonList } from '../components/library-list/button-list';
import { SearchBar } from '../components/search-box/search-box';
import { TitlePrinciple, SubTitle2, BreakLine}  from '../components/fonts/fonts.style';
import {
    PageTitle
}from '../components/page-styles/page-styles.styles'



const pageName="Minhas Disciplinas";
const titulo="Adicione as disciplinas do seu semestre";
const title1="Semestre Atual"
const title2="Semestre 2"
const title3="Semestre 3"
const title4="Semestre 4"
const titles=["Semestre Atual","Semestre 2","Semestre 3","Semestre 4"]


export class MinhasDisciplinas extends React.Component {
    
    render(){
       return (
            <>
                <Header isLogged={true}/>
                <BodyContainer>
                    <NavigationBar pageName={pageName}/>
                    <PageStyles titulo={titulo}/>
                    <SubTitle2>Clique no semestre que deseja adicionar uma disciplina</SubTitle2>
                    <BreakLine numberLines={1}/>
                        <SearchBar />
                    <BreakLine numberLines={1}/>
                    <ul>
                        {titles.map((ti) =>
                            <ButtonList key={ti.toString()}
                                    title={ti} />
                        )}
                    </ul>
                    <BreakLine numberLines={2}/>
                    
                    {
                        //PROVISÓRIO
                    }
                    <BreakLine/>
                    <BreakLine/>
                    <BreakLine/>
                    <BreakLine/>
                    <BreakLine/>
                    <Footer/>
                </BodyContainer>
               
            </>
       ); 
    }
}