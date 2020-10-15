import * as React from 'react';
import logo from '../../img/icons/uspShareIcon.png';

import { 
    HeaderDiv, 
    Logo, 
    Buttons, 
    TextEntrar, 
    TextRegister 
} from "./style";

export class Header extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <HeaderDiv>
                <Logo>
                    <img src={logo} alt="logo"></img>
                </Logo>
                <Buttons>
                    <TextEntrar> Entrar </TextEntrar>
                    <TextRegister> Registar </TextRegister>
                </Buttons>
            </HeaderDiv>
        );
    };
}