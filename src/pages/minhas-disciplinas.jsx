import React from 'react';
import { useHistory } from "react-router-dom";

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BodyContainer, BodyCenter } from '../components/body/style';
import { NavigationBar } from '../components/navigation-bar/navigation-bar';
import { PageStyles } from '../components/page-styles/page-styles';
import { ButtonList } from '../components/library-list/button-list';
import { SearchBar } from '../components/search-box/search-box';
import { SubTitle2, BreakLine}  from '../components/fonts/fonts.style';

const pageName="Minhas Disciplinas";
const titulo="Adicione as disciplinas do seu semestre";
const titles =["Semestre Atual","Semestre 2","Semestre 3","Semestre 4"];


export const MinhasDisciplinas = () => {
    let history = useHistory();
    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
            <>
                <Header isLogged={true}/>
                <BodyContainer>
                    <NavigationBar pageName={pageName} back={back}/>
                    <PageStyles titulo={titulo}/>
                    <SubTitle2>Clique no semestre que deseja adicionar uma disciplina</SubTitle2>
                    <BreakLine numberLines={1}/>
                        <SearchBar />
                    <BreakLine numberLines={1}/>
                    {titles.map((ti) =>
                        <ButtonList key={ti.toString()}
                                title={ti} />
                    )}
                    <BreakLine numberLines={4}/>
                    <Footer/>
                </BodyContainer>
            
            </>
    ); 
}