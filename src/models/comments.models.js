

export const CommentsModel = (body, status) => {

    if(status === 404){
        return null;
    }

    const bodyCommentsPrimary = body.filter(comentario => comentario.id_comentario_primario === null);
    const bodySubComments =  body.filter(comentario => comentario.id_comentario_primario !== null);
    console.log(bodyCommentsPrimary);
    const answer = bodyCommentsPrimary.map((comentario) => ({
            id: Number(comentario.id),
            name: comentario.nome,
            ranking: 50,
            imageUrl: comentario.imageUrl,
            comment: comentario.mensagem,
            ratingComment: comentario.nota,
            perfilUrl: ''
        })
    );

    return (answer.map(comentarioMain => {

        const id = comentarioMain.id;
        const bodySubCommentsFilter = bodySubComments.filter(comentario => comentario.id_comentario_primario === id );
 
        const subsComment = bodySubCommentsFilter.map(comentario => ({
                id: Number(comentario.id),
                name: comentario.nome,
                ranking: 50,
                imageURL: comentario.imageUrl,
                comment: comentario.mensagem,
                ratingComment: comentario.nota,
                perfilUrl: ''
            })
        );
        
        return {
            commentMain: comentarioMain,
            subsComment: subsComment
        };
    }));
};