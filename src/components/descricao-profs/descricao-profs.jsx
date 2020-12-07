import React, { Fragment } from 'react';
import { BreakLine } from '../fonts/fonts.style'

import {
    TextNomeProf,
    TextTitle,
    TextDescricao,
    BodyDescription,
    NeckDescription,
    UserDescription,
    Borda
} from './descricao-profs.style';
import { PerfilImage } from "../perfil-image/perfil-image";
import Rating from '@material-ui/lab/Rating';

export class DescricaoProfs extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rating: 5 
        }
    }

    handleChange = ( event, newValue) => {
        this.setState({ rating: newValue });
    }

    render() {
        const professorInfo = this.props.professorInfo;
        console.log(professorInfo.imageUrl);
        return (
            <div>
                <UserDescription>
                    <PerfilImage imageUrl={professorInfo.imageUrl} isNoRating={true} auto={true}/>
                    <NeckDescription>
                        <div>
                            <TextNomeProf> {professorInfo.name} </TextNomeProf>
                        </div>
                        <BreakLine numberLines={0.75}/>
                        <div>
                            <div>
                            <TextTitle>
                                Avaliação:
                            </TextTitle>
                            <Rating 
                                name="Descrição"
                                value={this.state.rating}
                                onChange={ this.handleChange }
                            />
                            </div>
                            <div>
                            <BreakLine numberLines={1}/>
                            <TextTitle>Email: </TextTitle>
                            <TextDescricao> {professorInfo.email} </TextDescricao>
                            <BreakLine numberLines={0.75}/>
                            <TextTitle> Linhas de Pesquisa: </TextTitle>
                            <BreakLine numberLines={0.1}/>
                            {professorInfo.pesquisas.map( (content, index) => (
                                <Fragment key={content+index}>
                                    <TextDescricao>{content}</TextDescricao>
                                    <BreakLine numberLines={0.1}/>
                                </Fragment>
                            ))} 
                            </div>
                        </div>
                    </NeckDescription>
                </UserDescription>
                <BreakLine numberLines={0.25}/>
                <BodyDescription>
                    <BreakLine numberLines={1}/>
                </BodyDescription>
            </div>
        );
    };
}