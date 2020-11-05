import * as React from 'react';

import { 
    PerfilImageDiv,
    Image,
    PerfilRating
} from "./perfil-image.style";

export class PerfilImage extends React.Component {
    
    render() {
        return (
            <PerfilImageDiv size={this.props.size} auto={this.props.auto}>
                <Image auto={this.props.auto} src="https://ocomecodafelicidade.com/wp-content/uploads/2018/12/como-parecer-uma-pessoa-bem-sucedida.jpg" />
                <PerfilRating size={this.props.size} auto={this.props.auto}> {this.props.ranking}</PerfilRating>
            </PerfilImageDiv>
        );
    };
}