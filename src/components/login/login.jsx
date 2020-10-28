import * as React from 'react';
import { 
    LoginContainer, 
    LoginRegister, 
    LoginInput,
    LoginTitle,
    SubTitleLogin,
    RegisterButton,
    ButtonGoogle,
    ButtonFacebook,
    ContainerButtons,
    InputType,
    ForgetTextDiv,
    ClickRegister,
    TextForget,
    ButtonEntrar
} from "./login.style";

import email from '../../img/icons/emailIcon.png';
import password from '../../img/icons/passwordIcon.png';

import { BreakLine } from '../fonts/fonts.style';

export class Login extends React.Component {

    render() {
        return (
            <LoginContainer>
                <LoginInput>
                    <LoginTitle>Entre na sua conta</LoginTitle>
                    <BreakLine numberLines={0.2} />
                    <ContainerButtons>
                        <ButtonGoogle/>
                        <ButtonFacebook />
                    </ContainerButtons>
                    <BreakLine numberLines={0.2} />
                    <InputType img={email} type="email" placeholder="Email"/>
                    <BreakLine numberLines={0.2}/>
                    <InputType img={password} type="password" placeholder="Senha"/>
                    <BreakLine numberLines={0.4}/>
                    <ForgetTextDiv>
                        <TextForget>Esqueceu sua senha? Clique </TextForget>
                        <ClickRegister> aqui</ClickRegister>
                    </ForgetTextDiv>
                    <BreakLine numberLines={0.4} type="email"/>
                    <ButtonEntrar> Entrar </ButtonEntrar>
                </LoginInput>
                
                <LoginRegister>
                    <LoginTitle>Crie sua Conta</LoginTitle>
                    <BreakLine numberLines={1} />
                    <SubTitleLogin> Crie sua própria conta e obtenha diversos recursos exclusivos de alunos da USP </SubTitleLogin>
                    <BreakLine numberLines={0.75} />
                    <RegisterButton>Registrar</RegisterButton>
                </LoginRegister>
            </LoginContainer>
        );
    };
}