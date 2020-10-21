import * as React from 'react';

import Rating from '@material-ui/lab/Rating';
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
                        <LabelButtonText> { this.props.text } </LabelButtonText>
                    </LabelButtonCenterDiv>
                </LabelButtonTextDiv>
                <LabelDateStarDiv>
                    <div>
                        <NameUserContent> {this.props.userName} </NameUserContent>
                    </div>
                    <div>
                        <DateContent> {this.props.date} </DateContent>
                    </div>
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