import * as React from 'react';
import logo from '../../img/icons/UspShareIcon.png';

import { 
    HeaderDiv, 
    Logo, 
    Buttons, 
    TextEntrar, 
    TextRegister 
} from "./style";

export class Header extends React.Component {

    render() {
        return (
            <HeaderDiv>
                <Logo>
                    <img src={logo} alt="logo"></img>
                </Logo>
                <Buttons>
                    <TextEntrar> Entrar </TextEntrar>
                    <TextRegister> Registrar </TextRegister>
                </Buttons>
            </HeaderDiv>
        );
    };
}