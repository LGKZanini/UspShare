import * as React from 'react';
import logo from '../../img/icons/uspShareIcon.png';
import HamburgerMenu from 'react-hamburger-menu';

import { 
    HeaderDiv,
    HeaderPrimaryDiv, 
    HeaderSubDiv,
    Logo, 
    Buttons, 
    TextEntrar, 
    TextRegister,
    ButtonHamburguerDiv,
    LinkHeader,
    LinkDiv
} from "./header.style";


import {
    Link,
    useLocation
  } from "react-router-dom";

import { HeaderLogin } from '../header-login/header-login';


export const Header = (props) => {

    const handleButtton  = () => {
         
    }

    
    let location = useLocation();
    return (
        <HeaderDiv>
            <HeaderPrimaryDiv>
                <ButtonHamburguerDiv>
                    <HamburgerMenu
                        isOpen={false}
                        menuClicked={ handleButtton}
                        width={24}
                        height={18}
                        strokeWidth={2}
                        rotate={0}
                        color='#FDAF2D'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                </ButtonHamburguerDiv>
                <Logo>
                    <img src={logo} alt="logo"></img>
                </Logo>
                {  props.isLogged
                ? (
                    <HeaderLogin/>
                )
                : (
                    <Buttons>
                        <Link to={{
                                pathname: `/entrar`,
                                state: { entrar: location }
                            }}>
                                <TextEntrar> Entrar </TextEntrar>
                        </Link>
                        <Link to={{
                                pathname: `/registrar`,
                                state: { registrar: location }
                            }}
                        >
                            <TextRegister> Registrar </TextRegister>
                        </Link>
                    </Buttons>
                )}
            </HeaderPrimaryDiv>
            <HeaderSubDiv hide={ true}>
                <LinkDiv>
                    <LinkHeader>Entrar</LinkHeader>
                </LinkDiv>
                <LinkDiv>
                    <LinkHeader>Registrar</LinkHeader>
                </LinkDiv>
            </HeaderSubDiv>
        </HeaderDiv>
    );
    
}