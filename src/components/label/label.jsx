import * as React from 'react';

import { 
    LabelDiv,
    ContainerLabel
} from "./style";


export class Label extends React.Component {

    render() {
        return (
            <ContainerLabel>
                <LabelDiv/>
                <LabelDiv/>
                <LabelDiv/>
                <LabelDiv/>
            </ContainerLabel>
        );
    };
}