import * as React from 'react';

import Rating from '@material-ui/lab/Rating';
import styled from 'styled-components';
import { 
    LabelStarDiv, 
    LabelButtonText,
    LabelButtonTextDiv,
    LabelButtonCenterDiv, 
    LabelDateStarDiv, 
    LabelTextStarVotes,
    DateContent,
    NameUserContent 
} from './library-star.style';

const A = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: none;
`;
export class LabelStarList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rating: 5 // VALOR MOCKADO
        }
    }

    handleChange = ( event, newValue) => {
        this.setState({ rating: newValue });
    }

    render() {
        return (
            <LabelStarDiv>
                <LabelButtonTextDiv>
                    <LabelButtonCenterDiv>
                        {
                            this.props?.url !== undefined 
                            ? (<A href={this.props.url} download>
                                <LabelButtonText> { this.props.text } </LabelButtonText>
                              </A>
                              )
                            : (
                                <LabelButtonText> {'fodae?'+ this.props.text } </LabelButtonText>
                            )
                        }
                    </LabelButtonCenterDiv>
                </LabelButtonTextDiv>
                <LabelDateStarDiv>
                    <NameUserContent> {this.props.userName} </NameUserContent>
                    <DateContent> {this.props.date} </DateContent>
                    <div>
                        <Rating
                            name={this.props.index}
                            value={this.state.rating}
                            onChange={ this.handleChange }
                        />
                        <LabelTextStarVotes> Avaliações totais: {this.props.votes} </LabelTextStarVotes>
                    </div>
                </LabelDateStarDiv>
            </LabelStarDiv>
        );
    }

}