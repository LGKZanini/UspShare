import React from 'react';

import {  useHistory } from "react-router-dom";

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BodyContainer } from '../components/body/style';
import { NavigationBar } from '../components/navigation-bar/navigation-bar';
import { PageStyles } from '../components/page-styles/page-styles';
import { ButtonList } from '../components/library-list/button-list';
import {BreakLine} from '../components/fonts/fonts.style'

const pageName="Laboratório engenharia de Software";
const titulo="Materiais disponíveis ";
const titles=["Semestre Atual","Semestre 2","Semestre 3","Semestre 4"]

export const MaterialApoio = () => {
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
                <BreakLine numberLines={1}/>
                <div>
                    {titles.map((ti) =>
                        <ButtonList key={ti.toString()}
                                title={ti} />
                    )}
                </div>

                <BreakLine numberLines={4}/>
                <Footer/>
            </BodyContainer>
            
        </>
    );
}