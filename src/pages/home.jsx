import React from 'react';

import { Header } from '../components/header/header';
import { BodyContainer } from '../components/body/style';
import { Label } from '../components/label/label';
import { ButtonList } from '../components/library-list/button-list';
import { Footer } from '../components/footer/footer';
import { SearchBar } from '../components/search-box/search-box';

export class Home extends React.Component {
    
    render(){
       return (
            <>
                <Header/>
                <BodyContainer>
                    <SearchBar />
                    <ButtonList title={"Semestre Atual"} />
                    <Label/>
                    <Footer/>
                </BodyContainer>
            </>
       ); 
    }
}