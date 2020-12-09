import * as React from 'react';

import { LabelButtonDiv, TrashButtonLabel, LabelButtonText } from "./library-trash.style";
import { StyledLink } from '../fonts/fonts.style';

export class LabelTrashList extends React.Component {
    
    render() {
        return (
            <LabelButtonDiv>
                <div> 
                    <StyledLink  to={{ 
                                pathname: `/disciplina/`+this.props.codigoDisciplina, 
                                state: { nomeDisciplina: this.props.text }
                            }} >
                        <LabelButtonText> {this.props.text }</LabelButtonText>
                    </StyledLink>
                </div>
                <div>
                    <TrashButtonLabel/>
                </div>
            </LabelButtonDiv>
        );
    }

}