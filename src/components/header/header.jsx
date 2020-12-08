import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import HamburgerMenu from 'react-hamburger-menu';

import logo from '../../img/icons/uspShareIcon.png';

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

import { StyledLink } from '../fonts/fonts.style';
import { HeaderLogin } from '../header-login/header-login';


export const Header = (props) => {

    const [click, setSlick] = useState(false);

    const handleButtton  = () => {
        setSlick(!click);
    }

    
    let location = useLocation();

    return (
        <HeaderDiv>
            <HeaderPrimaryDiv>
                <ButtonHamburguerDiv>
                    <HamburgerMenu
                        isOpen={click}
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
                <StyledLink 
                    to={{
                        pathname: `/`
                    }}
                >
                    <Logo>
                        <img src={logo} alt="logo"></img>
                    </Logo>
                </StyledLink>
                {  props.isLogged
                ? (
                    <HeaderLogin/>
                )
                : (
                    <Buttons>
                        <StyledLink to={{
                                pathname: `/entrar`,
                                state: { entrar: location }
                            }}>
                                <TextEntrar> Entrar </TextEntrar>
                        </StyledLink>
                        <StyledLink to={{
                                pathname: `/registrar`,
                                state: { registrar: location }
                            }}
                        >
                            <TextRegister> Registrar </TextRegister>
                        </StyledLink>
                    </Buttons>
                )}
            </HeaderPrimaryDiv>
            <HeaderSubDiv hide={!click}>
                <StyledLink to={{
                                pathname: `/entrar`,
                                state: { entrar: location }
                            }}>
                    <LinkDiv>
                        <LinkHeader>Entrar</LinkHeader>
                    </LinkDiv>
                </StyledLink>
                <StyledLink to={{
                                pathname: `/registrar`,
                                state: { registrar: location }
                            }}
                        >
                    <LinkDiv>
                        <LinkHeader>Registrar</LinkHeader>
                    </LinkDiv>
                </StyledLink>
            </HeaderSubDiv>
        </HeaderDiv>
    );
    
}