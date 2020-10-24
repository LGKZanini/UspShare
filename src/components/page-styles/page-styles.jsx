import * as React from 'react';
import {
    PageTitle,
    Espacamento
}from './page-styles.styles'




export class PageStyles extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Espacamento>
                <PageTitle>
                    {this.props.titulo}
                </PageTitle>
            </Espacamento>
        );
    };
}