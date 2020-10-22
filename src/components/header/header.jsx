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

export class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hideButton: true,
        }
    }

    handleButtton  = () => {
        this.setState({ hideButton : !this.state.hideButton })
    }

    render() {
        return (
            <HeaderDiv>
                <HeaderPrimaryDiv>
                    <ButtonHamburguerDiv>
                        <HamburgerMenu
                            isOpen={!this.state.hideButton}
                            menuClicked={this.handleButtton}
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
                    <Buttons>
                        <TextEntrar> Entrar </TextEntrar>
                        <TextRegister> Registar </TextRegister>
                    </Buttons>
                </HeaderPrimaryDiv>
                <HeaderSubDiv hide={this.state.hideButton}>
                    <LinkDiv>
                        <LinkHeader>Entrar</LinkHeader>
                    </LinkDiv>
                    <LinkDiv>
                        <LinkHeader>Registrar</LinkHeader>
                    </LinkDiv>
                </HeaderSubDiv>
            </HeaderDiv>
        );
    };
}