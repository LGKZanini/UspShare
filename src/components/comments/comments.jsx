import React, { Fragment } from 'react';

import { 
    CommentsSection,
    HrSection,
    LoadMoreButton,
    LoadMoreButtonDiv,
 } from "./comments.style";
import { SubTitle, BreakLine } from '../fonts/fonts.style';
import { CommentSection } from '../comment-section/comment-section';
import { CommentsRenderList } from '../comment-render-list/comment-render-list';
import { CommentInput } from '../comment-input/comment-input';

const commentsSection = [
    {
        commentMain: {
            name: "Matheus Souza",
            ranking: 50,
            ratingComment: 12,
            imageUrl: "",
            comment: "Matéria pode ser complicada, mas fazendo lista antigas e provas antigas é possível com algumas horas conseguir o 5 BOLA",
            perfilUrl: "Asdasdasd"
        },
        subsComment: [
            {
                name: "Matheus Souza",
                ranking: 50,
                ratingComment: 12,
                imageUrl: "",
                comment: "Matéria pode ser complicada, mas fazendo lista antigas e provas antigas é possível com algumas horas conseguir o 5 BOLA",
                perfilUrl: "Asdasdasd"
            },
            {
                name: "Matheus Souza",
                ranking: 50,
                ratingComment: 12,
                imageUrl: "",
                comment: "Matéria pode ser complicada, mas fazendo lista antigas e provas antigas é possível com algumas horas conseguir o 5 BOLA",
                perfilUrl: "Asdasdasd"
            }
        ],
    },
    {
        commentMain: {
            name: "Leandro Souza",
            ranking: 50,
            ratingComment: 12,
            imageUrl: "",
            comment: "Matéria pode ser complicada, mas fazendo lista antigas e provas antigas é possível com algumas horas conseguir o 5 BOLA",
            perfilUrl: "Asdasdasd"
        },
        subsComment: [
            {
                name: "Matheus Souza",
                ranking: 50,
                ratingComment: 12,
                imageUrl: "",
                comment: "Matéria pode ser complicada, mas fazendo lista antigas e provas antigas é possível com algumas horas conseguir o 5 BOLA",
                perfilUrl: "Asdasdasd"
            },
            {
                name: "Matheus Souza",
                ranking: 50,
                ratingComment: 12,
                imageUrl: "",
                comment: "Matéria pode ser complicada, mas fazendo lista antigas e provas antigas é possível com algumas horas conseguir o 5 BOLA",
                perfilUrl: "Asdasdasd"
            },
            {
                name: "Matheus Souza",
                ranking: 50,
                ratingComment: 12,
                imageUrl: "",
                comment: "Matéria pode ser complicada, mas fazendo lista antigas e provas antigas é possível com algumas horas conseguir o 5 BOLA",
                perfilUrl: "Asdasdasd"
            },
            {
                name: "Matheus Souza",
                ranking: 50,
                ratingComment: 12,
                imageUrl: "",
                comment: "Matéria pode ser complicada, mas fazendo lista antigas e provas antigas é possível com algumas horas conseguir o 5 BOLA",
                perfilUrl: "Asdasdasd"
            }
        ],
    },
];

export class Comments extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <CommentsSection>
                <SubTitle>Comentários</SubTitle>
                <BreakLine numberLines={1}/>
                {commentsSection.map(({commentMain, subsComment, index}) => (   
                        <Fragment key={commentMain.name+commentMain.ranking+index}>  
                            <CommentSection user={commentMain} />
                            <BreakLine numberLines={0.5}/>
                            <CommentsRenderList subsComment={subsComment}/>
                            <BreakLine numberLines={0.5}/>
                            <HrSection/>
                            <BreakLine numberLines={0.25}/>
                        </Fragment>
                    )
                )}
                <LoadMoreButtonDiv>
                    <LoadMoreButton>Carregar Mais</LoadMoreButton>
                </LoadMoreButtonDiv>
                <BreakLine numberLines={0.25}/>
                <CommentInput />
                <BreakLine numberLines={1}/>
            </CommentsSection>
        );
    };
}