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
            isVisible: false,
        }
    }

    render() {
        if(this.props.user?.ranking === undefined){
            return (<></>);
        }
        return (
            <CommentDiv isSubComment={this.props.isSubComment}>
                <ImageDiv>
                    <PerfilImageDiv>
                        <PerfilImage size={1} ranking={this.props.user.ranking}/>
                    </PerfilImageDiv>
                    <div>
                        <ButtonTop isTop={true}/>
                        <VoteText> {this.props.user.ratingComment} </VoteText>
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