import React from 'react';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BodyContainer } from '../components/body/style';
import { NavigationBar } from '../components/navigation-bar/navigation-bar';
import { PageStyles } from '../components/page-styles/page-styles';
import { LabelStarList } from '../components/library-star/library-star';
import { ButtonList } from '../components/library-list/button-list';
import {BreakLine} from '../components/fonts/fonts.style'



const pageName="Cálculo I  - 2453 - Material de Apoio";
const titulo="Materiais disponíveis ";
const titles=["Semestre Atual","Semestre 2","Semestre 3","Semestre 4"]

export class MaterialApoio extends React.Component {
    
    render(){
       return (
            <>
                <Header isLogged={true}/>
                <BodyContainer>
                    <NavigationBar pageName={pageName}/>
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
}