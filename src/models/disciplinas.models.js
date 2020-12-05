export const DisciplinasModel = (body) => (
    body.map((comentario) => ({
            id: Number(comentario.id),
            codigoDisciplina: comentario.codigoDisciplina,
            name: comentario.nome,
            dataCadastro: comentario.dataCadastro
        })
    )
)