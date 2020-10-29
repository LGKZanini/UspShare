import React, { Fragment } from 'react';

import {
    LoadMoreButton,
    AnswerButton,
    AnswersDiv
 } from "./comment-render-list.style";

import {  BreakLine } from '../fonts/fonts.style';
import { CommentSection } from '../comment-section/comment-section';
import { CommentInput } from '../comment-input/comment-input';

export class CommentsRenderList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isCompleteList: false,
            isAnswer: false,
        }
    }

    renderMore = () => {
        this.setState({
            isCompleteList: true,
        })
    }

    answerClick = () => {
        this.setState({
            isAnswer: true,
        })
    }

    render() {
        return (
            <>
                { this.state.isCompleteList 
                    ?  (this.props.subsComment.map( (content,index) => (
                        <Fragment key={content.name+content.ranking+index}>
                            <CommentSection user={content} isSubComment={true}/>
                            <BreakLine numberLines={0.5}/>
                        </Fragment>
                    )))
                    : ( <>
                        <CommentSection user={this.props.subsComment[0]} isSubComment={true}/>
                        <BreakLine numberLines={0.5}/>
                    </>
                    )
                }
                <AnswersDiv>
                    { !this.state.isAnswer && (
                        <AnswerButton onClick={this.answerClick} >Responder</AnswerButton>
                    )}
                    { !this.state.isCompleteList && this.props.subsComment.length - 1 > 0 && ( 
                        <LoadMoreButton onClick={this.renderMore}>Ver mais {this.props.subsComment.length - 1} comentários</LoadMoreButton>
                    )}
                </AnswersDiv>
                {this.state.isAnswer && (
                    <>
                        <BreakLine numberLines={0.25}/>
                        <CommentInput isSubComment={true}/>
                    </>
                )}
            </>
        );
    };
}