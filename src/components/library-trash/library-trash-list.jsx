import * as React from 'react';

import { LabelButtonDiv, TrashButtonLabel, LabelButtonText } from "./library-trash.style";

export class LabelTrashList extends React.Component {
    
    render() {
        return (
            <LabelButtonDiv>
                <div>
                    <LabelButtonText> {this.props.text }</LabelButtonText>
                </div>
                <div>
                    <TrashButtonLabel/>
                </div>
            </LabelButtonDiv>
        );
    }

}