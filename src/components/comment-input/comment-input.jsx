import React from 'react';

import {
    CommentTextArea,
    SendButton,
    InputDiv,
 } from "./comment-input.style";
import { PerfilImage } from '../perfil-image/perfil-image';
import { PerfilImageDiv } from "../comment-section/comment-section.style";

export class CommentInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isCompleteList: false,
        }
    }

    render() {
        return (
            <InputDiv isSubComment={this.props.isSubComment}>
                <PerfilImageDiv>
                    <PerfilImage size={1} ranking={10}/>
                </PerfilImageDiv>
                <CommentTextArea/>
                <SendButton onClick={() => console.log("ta funcionando")}/>
            </InputDiv>
        );
    };
}