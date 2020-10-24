import React from 'react';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BodyContainer } from '../components/body/style';
import { NavigationBar } from '../components/navigation_bar/navigation_bar';
import { PageStyles } from '../components/page-styles/page-styles';
import { ButtonList } from '../components/library-list/button-list';



const pageName="Cálculo I  - 2453 - Material de Apoio";
const titulo="Materiais disponíveis ";
const title1="Listas"
const title2="Provas"
const title3="Resoluções"
const title4="Resumos"
const title5="Material Extra"


export class MaterialApoio extends React.Component {
    
    render(){
       return (
            <>
                <Header isLogged={true}/>
                <BodyContainer>
                    <NavigationBar pageName={pageName}/>
                    <PageStyles titulo={titulo}/>
                    <ButtonList title={title1}/>
                    <ButtonList title={title2}/>
                    <ButtonList title={title3}/>
                    <ButtonList title={title4}/>
                    <ButtonList title={title5}/>
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