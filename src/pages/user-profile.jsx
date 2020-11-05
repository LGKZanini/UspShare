import React from 'react';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BodyContainer } from '../components/body/style';
import { UserProfileName } from '../components/user-profile/user-profile-name'
import { BreakLine } from '../components/fonts/fonts.style'
import { ButtonList } from '../components/library-list/button-list';

const user = {
    avaliations: 350,
    acess: 105,
}

const titles =["Materias Cursadas","Avaliações Recentes","Pulicações Recentes"];

export class UserProfile extends React.Component {
    
    render(){
       return (
            <>
                <Header isLogged={true}/>
                <BodyContainer>
                    <BreakLine numberLines={1}/>
                    <UserProfileName user={user} />
                    <BreakLine numberLines={1}/>
                    {titles.map((ti) =>
                        <ButtonList key={ti.toString()} title={ti} />
                    )}
                    <BreakLine numberLines={1}/>
                    <Footer/>
                </BodyContainer>
               
            </>
       ); 
    }
}