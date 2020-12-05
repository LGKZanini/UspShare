import React, {useState, useEffect} from 'react';

import { requestAxios, api } from '../http/axios-http';

import { UserModel } from '../models/user.models';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BodyContainer } from '../components/body/style';
import { UserProfileName } from '../components/user-profile/user-profile-name'
import { BreakLine } from '../components/fonts/fonts.style'
import { ButtonList } from '../components/library-list/button-list';

const titles =["Materias Cursadas","Avaliações Recentes","Pulicações Recentes"];

export const UserProfile = (props) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const id = props.match.params.userID;

    const handleRequestAxios = async () => {
        try{
            setLoading(true);
            const answer = await requestAxios({
                url: api+'/usuarioPerfil/'+id,
                method: 'get'
            });
            setUser(UserModel(answer.body));            
            setLoading(false);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        handleRequestAxios();
    }, []);


    return (
        <>
            <Header isLogged={true}/>
            <BodyContainer>
                <BreakLine numberLines={1}/>
                <UserProfileName user={user} loading={loading} />
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