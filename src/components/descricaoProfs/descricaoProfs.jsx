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
import Rating from '@material-ui/lab/Rating';

export class DescricaoProfs extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rating: 5 
        }
    }

    handleChange = ( event, newValue) => {
        this.setState({ rating: newValue });
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
                        <div>
                            <TextTitle>
                                Avaliação:
                            </TextTitle>
                            <Rating 
                                name="Descrição"
                                value={this.state.rating}
                                onChange={ this.handleChange }
                            />
                        </div>
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