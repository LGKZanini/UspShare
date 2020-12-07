export const ProfessoresModel = (body) => (
    body.map((professor) => ({
            id: professor.id,
            imageUrl: professor.imageUrl,
            email: professor.email,
            name: professor.nome,
            nota: professor.nota,
            pesquisas: professor.linhaDePesquisa === null ? [] : professor.linhaDePesquisa.split(" ")
        })
    )
)