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
        this.state = {
            valorClick: 0
        };
    }

    componentDidMount() {}

    CliqueState () {
        this.setState({
            valorClick: 2
        })
    }

    render() {
        return (
            <HeaderDiv>
                <Logo>
                    <img src={logo} alt="logo"></img>
                </Logo>
                <Buttons>
                    <TextEntrar> Entrar </TextEntrar>
                    <TextRegister> Registrar </TextRegister>
                    <button onClick={this.CliqueState }> Teste </button>
                    <text> {this.state.valorClick}</text>
                </Buttons>
            </HeaderDiv>
        );
    };
}