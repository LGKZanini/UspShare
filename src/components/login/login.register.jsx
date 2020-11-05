import * as React from 'react';
import { 
    LoginContainer, 
    LoginSignIn, 
    LoginRegisterInput,
    LoginTitle,
    SubTitleLogin,
    RegisterButton,
    ButtonGoogle,
    ButtonFacebook,
    ContainerButtons,
    InputType,
    TextForget,
    ButtonEntrar
} from "./login.style";

import {
    Link
  } from "react-router-dom";

import email from '../../img/icons/emailIcon.png';
import password from '../../img/icons/passwordIcon.png';
import name from '../../img/icons/nameIcon.png';

import { BreakLine } from '../fonts/fonts.style';

export class LoginRegister extends React.Component {

    render() {
        return (
            <LoginContainer>
                <LoginSignIn>
                    <LoginTitle>Bem vindo de Volta</LoginTitle>
                    <BreakLine numberLines={1} />
                    <SubTitleLogin> Para continuar conectado, utilize suas credências </SubTitleLogin>
                    <BreakLine numberLines={0.4} />
                    <Link to='./entrar'><RegisterButton> Entrar </RegisterButton></Link>
                </LoginSignIn>
                
                <LoginRegisterInput>
                    
                <BreakLine numberLines={0.2} />
                    <LoginTitle>Crie sua conta</LoginTitle>
                    <ContainerButtons>
                        <ButtonGoogle/>
                        <ButtonFacebook />
                    </ContainerButtons>
                    <TextForget>Ou se registre com seu email </TextForget>
                    <BreakLine numberLines={0.2} />
                    <InputType img={name} type="name" placeholder="Nome"/>
                    <BreakLine numberLines={0.2} />
                    <InputType img={email} type="email" placeholder="Email"/>
                    <BreakLine numberLines={0.2}/>
                    <InputType img={password} type="password" placeholder="Senha"/>
                    <BreakLine numberLines={0.2}/>
                    <InputType img={password} type="password" placeholder="Confirmar senha"/>
                    <BreakLine numberLines={0.4}/>
                    <ButtonEntrar> Registrar </ButtonEntrar>
                </LoginRegisterInput>
            </LoginContainer>
        );
    };
}