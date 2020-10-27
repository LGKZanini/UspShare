import * as React from 'react';

import { 
    CommentDiv, 
    ButtonTop, 
    ImageDiv,
    VoteText,
    TextDiv,
    TextMain,
    TextUserName,
    PerfilImageDiv,
} from "./comment-section.style";

import { PerfilImage } from '../perfil-image/perfil-image';

export class CommentSection extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            votes: 15,
            isVisible: false,
        }
    }

    render() {
        return (
            <CommentDiv isSubComment={this.props.isSubComment}>
                <ImageDiv>
                    <PerfilImageDiv>
                        <PerfilImage size={1} ranking={this.props.user.ranking}/>
                    </PerfilImageDiv>
                    <div>
                        <ButtonTop isTop={true}/>
                        <VoteText> {this.state.votes} </VoteText>
                        <ButtonTop isTop={false}/>
                    </div>
                </ImageDiv>
                <TextDiv>
                    <TextUserName> {this.props.user.name} </TextUserName>
                    <TextMain> {this.props.user.comment} </TextMain>
                </TextDiv>
            </CommentDiv>
        );
    };
}