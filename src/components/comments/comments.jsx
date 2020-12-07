import React, { Fragment } from 'react';

import { 
    CommentsSection,
    HrSection,
    LoadMoreButton,
    LoadMoreButtonDiv,
 } from "./comments.style";
import { SubTitle,SubTitle2, BreakLine } from '../fonts/fonts.style';
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
            comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            perfilUrl: "Asdasdasd"
        },
        subsComment: [
            {
                name: "Matheus Souza",
                ranking: 50,
                ratingComment: 12,
                imageUrl: "",
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                perfilUrl: "Asdasdasd"
            },
            {
                name: "Matheus Souza",
                ranking: 50,
                ratingComment: 12,
                imageUrl: "",
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
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
            comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            perfilUrl: "Asdasdasd"
        },
        subsComment: [
            {
                name: "Matheus Souza",
                ranking: 50,
                ratingComment: 12,
                imageUrl: "",
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                perfilUrl: "Asdasdasd"
            },
            {
                name: "Matheus Souza",
                ranking: 50,
                ratingComment: 12,
                imageUrl: "",
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                perfilUrl: "Asdasdasd"
            },
            {
                name: "Matheus Souza",
                ranking: 50,
                ratingComment: 12,
                imageUrl: "",
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                perfilUrl: "Asdasdasd"
            },
            {
                name: "Matheus Souza",
                ranking: 50,
                ratingComment: 12,
                imageUrl: "",
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
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
        const render = ( this.props?.loading  || this.props?.commentsSection === undefined || this.props.commentsSection === null);
        return (
            <CommentsSection>
                <BreakLine numberLines={0.5}/>
                <SubTitle>Comentários</SubTitle>
                <BreakLine numberLines={1}/>
                {render ? (
                    this.props?.loading ? ( <></> )
                    : ( <SubTitle2>Seja o primeiro a comentar</SubTitle2> )
                ) : (     
                this.props.commentsSection.map(({commentMain, subsComment, index}) => (  
                        <Fragment key={commentMain.name+commentMain.ranking+index}>
                            <CommentSection user={commentMain} />
                            <BreakLine numberLines={0.5}/>
                            <CommentsRenderList subsComment={subsComment}/>
                            <BreakLine numberLines={0.5}/>
                            <HrSection/>
                            <BreakLine numberLines={0.25}/>
                        </Fragment>
                    ))
                )}
                {render ? (null) : (
                    <LoadMoreButtonDiv>
                        <LoadMoreButton>Carregar Mais</LoadMoreButton>
                    </LoadMoreButtonDiv>
                )}
                <BreakLine numberLines={0.25}/>
                <CommentInput />
                <BreakLine numberLines={1}/>
            </CommentsSection>
        );
    };
}