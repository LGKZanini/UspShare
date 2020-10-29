import React, { Fragment } from 'react';
import iconEdge from '../../img/icons/borda.jpg'
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

        return (
            <div>
                <UserDescription>
                    <Borda src ={iconEdge}/>
                    <NeckDescription>
                        <div>
                            <TextNomeProf> {professorInfo.name} </TextNomeProf>
                        </div>
                        <BreakLine numberLines={1}/>
                        
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
                    </NeckDescription>
                </UserDescription>
                <BreakLine numberLines={0.25}/>
                <BodyDescription>
                    <TextTitle>Email: </TextTitle>
                    <TextDescricao> {professorInfo.email} </TextDescricao>
                    <BreakLine numberLines={0.5}/>
                    <TextTitle> Linhas de Pesquisa: </TextTitle>
                    <BreakLine numberLines={0.1}/>
                    {professorInfo.pesquisas.map( (content, index) => (
                        <Fragment key={content+index}>
                            <TextDescricao>{content}</TextDescricao>
                            <BreakLine numberLines={0.1}/>
                        </Fragment>
                    ))} 
                    <BreakLine numberLines={1}/>
                </BodyDescription>
            </div>
        );
    };
}