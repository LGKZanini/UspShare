
export const PublicacoesModel = (body, status) => {

    if(status === 404){
        return null;
    }
    const lista = body.map((element) => ({
      text: element.titulo,
      date: element.dataCadastro,
      userName: element.nome,
      votes: element.votos,
      tipoPublicacao: element.tipoPublicacao,
      url: element.conteudo,
    }))

    return (group_by(lista, 'tipoPublicacao'));
};


function group_by (lista, coluna) {
    var colunas = {};
    var resultado = [];
  
    lista.forEach(function (item) {
      var reg = {};
  
      colunas[item[coluna]] = colunas[item[coluna]] || [];
  
      for (var i in item) 
        if (i != coluna) 
          reg[i] = item[i]; 
  
      colunas[item[coluna]].push(reg);
    });
  
    for (var i in colunas) 
      resultado.push({key: i, values: colunas[i]});
  
    return resultado;
  }