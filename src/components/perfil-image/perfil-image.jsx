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
                {   this.props.imageUrl === null || this.props.imageUrl === undefined
                    ? <Image auto={this.props.auto} src="https://i.ibb.co/0yF4H4V/Ellipse-1.png" />
                    : <Image auto={this.props.auto} src={this.props.imageUrl} />
                }
                <PerfilRating size={this.props.size} auto={this.props.auto}> {this.props.ranking}</PerfilRating>
            </PerfilImageDiv>
        );
    };
}