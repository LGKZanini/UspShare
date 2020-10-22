import * as React from 'react';
import {
    NavigationDiv,
    ButtonReturn,
    TextPage
    } from './navigation_bar.style';


export class NavigationBar extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <NavigationDiv>
                <ButtonReturn/>
                <TextPage>
                    {this.props.pageName}
                </TextPage>
            </NavigationDiv>
        );
    };
}