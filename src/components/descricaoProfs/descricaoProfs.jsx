import * as React from 'react';
import iconEdge from '../../img/icons/borda.jpg'

import {
    TextNomeProf,
    TextTitle,
    TextDescricao,
    BodyDescription,
    NeckDescription,
    UserDescription,
    Borda
} from './descricaoProfs.style';

export class DescricaoProfs extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <UserDescription>
                    <Borda src ={iconEdge}/>
                    <NeckDescription>
                        <p><TextNomeProf>
                            {this.props.nomeProf}
                        </TextNomeProf></p>
                        <h1/>
                        <TextTitle>
                            Avaliação:
                        </TextTitle><br/>
                    </NeckDescription>
                </UserDescription>
                <BodyDescription>
                    <p><TextTitle>
                        Email: 
                    </TextTitle><br/>
                    <TextDescricao>
                        {this.props.emailProf} 
                    </TextDescricao><br/></p>
                
                    <TextTitle>
                        Linhas de Pesquisa:
                    </TextTitle><br/>
                    <TextDescricao>
                        {this.props.pesquisasProf}
                    </TextDescricao>
                </BodyDescription>
            </div>
        );
    };
}