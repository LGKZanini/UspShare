import React, { Fragment } from 'react';

import { 
    LabelDiv,
    LabelSubMessage,
    LabelTitle,
    LabelImage,
    ContainerLabel
} from "./label.style";


export class Label extends React.Component {

    render() {
        return (
            <ContainerLabel>
                {this.props.labelContent.map((content, index) => 
                    <Fragment key={index+content.titleMessage}>
                        <LabelDiv>
                            <LabelTitle>{content.titleMessage}</LabelTitle>
                            <LabelImage src={content.iconUrl} alt={content+index}/>
                            <LabelSubMessage>{content.subMessage}</LabelSubMessage>
                        </LabelDiv>
                    </Fragment>
                )}
            </ContainerLabel>
        );
    };
}