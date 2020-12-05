export const UserModel = (body) => (
   {
        id: Number(body.id),
        email: body.email,
        seguidores: body.seguidores,
        seguindo: body.seguindo,
        publicacoes: body.publicacoes,
        curso: body.curso,
        imageUrl: body.imageUrl,
        name: body.nome
    }
);
