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
import { StyledLink } from '../fonts/fonts.style';
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
            <CommentDiv key={this.props.user.message+ this.props.user.id} isSubComment={this.props.isSubComment}>
                <ImageDiv>
                    <PerfilImageDiv>
                        <PerfilImage imageUrl={this.props.user.imageUrl} size={1} ranking={this.props.user.ranking}/>
                    </PerfilImageDiv>
                    <div>
                        <ButtonTop isTop={true}/>
                        <VoteText> {this.props.user.ratingComment} </VoteText>
                        <ButtonTop isTop={false}/>
                    </div>
                </ImageDiv>
                <TextDiv>
                    <StyledLink  to={{ pathname: `/userProfile/`+this.props.user.user_id }} >
                        <TextUserName> {this.props.user.name} </TextUserName>
                    </StyledLink>
                    <TextMain> {this.props.user.comment} </TextMain>
                </TextDiv>
            </CommentDiv>
        );
    };
}