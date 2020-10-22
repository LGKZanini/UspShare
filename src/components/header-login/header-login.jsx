import * as React from 'react';

import {
    TextUser, 
    TextCourse,
    TextLoginDiv,
    TextLoginSubDiv,
} from './header-login.style'; 

export class HeaderLogin extends React.Component {

    render() {
        return (
            <TextLoginDiv>
                <TextLoginSubDiv>
                    <TextUser> Arthur Bires </TextUser>
                    <TextCourse> Engenharia da computação </TextCourse>
                </TextLoginSubDiv>
            </TextLoginDiv>
        );
    };
}