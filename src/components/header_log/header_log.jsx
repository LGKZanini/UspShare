import * as React from 'react';
import logo from '../../img/icons/uspShareIcon.png';
import {
    TextUser, 
    TextCourse
} from './style' 
import { 
    HeaderDiv, 
    Logo
} from "../header/style";

export class Header_log extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <HeaderDiv>
                <Logo>
                    <img src={logo} alt="logo"></img>
                </Logo>
                    <TextUser> {this.props.username} </TextUser>
                    <TextCourse> {this.props.coursename} </TextCourse>
            </HeaderDiv>
        );
    };
}