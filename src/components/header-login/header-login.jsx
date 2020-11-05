import * as React from 'react';

import {
    TextUser, 
    TextCourse,
    TextLoginDiv,
    TextLoginSubDiv,
    ButtonStatus,
    ButtonStatusDiv,
    ButtonLabel,
    ButtonPerfil,
    ButtonSair
} from './header-login.style'; 
import { StyledLink } from '../fonts/fonts.style';

export class HeaderLogin extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isClick: false
        }
    }

    handleButton = () => {
        this.setState({isClick: !this.state.isClick});
    }

    render() {
        return (
            <TextLoginDiv>
                <TextLoginSubDiv>
                    <TextUser> Arthur Bires </TextUser>
                    <TextCourse> Engenharia da computação </TextCourse>
                </TextLoginSubDiv>
                <ButtonStatusDiv>
                    <ButtonStatus onClick={this.handleButton} click={this.state.isClick}/>
                </ButtonStatusDiv>
                {this.state.isClick && (
                    <ButtonLabel>
                        <StyledLink to={{ pathname: `/userProfile` }}>
                            <ButtonPerfil>Meu Perfil</ButtonPerfil>
                        </StyledLink>
                        <StyledLink to={{ pathname: `/minhas-disciplinas` }}>
                            <ButtonPerfil>Minhas Disciplinas</ButtonPerfil>
                        </StyledLink>
                        <StyledLink to={{ pathname: `/` }}>
                            <ButtonSair> Sair</ButtonSair>
                        </StyledLink>
                    </ButtonLabel>
                )}
            </TextLoginDiv>
        );
    };
}