import * as React from 'react';

import { 
    TitleName,
    DisciplineName,
    TitleAchievement,
    ButtonFollow,
    WrapDiv,
    CenterDiv,
    InformationDiv,
    ContainerUser,
    AvaliationsTitle,
    InformationSubDiv
} from "./user-profile.style";
import { BreakLine } from '../fonts/fonts.style';
import { PerfilImage } from '../perfil-image/perfil-image';


export class UserProfileName extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        if(this.props.loading || this.props.user === undefined || this.props.user === null){
            return null;
        }

        return (
            <>
                <ContainerUser>
                    <CenterDiv>
                        <PerfilImage imageUrl={this.props.user.imageUrl} auto={true} size={3} ranking={50}/>
                    </CenterDiv>
                    <WrapDiv>
                        <CenterDiv>
                            <TitleName> {this.props.user.name} </TitleName>
                            <DisciplineName> {this.props.user.curso} </DisciplineName>
                            <AvaliationsTitle> Numero de avaliações: 250</AvaliationsTitle>
                            <AvaliationsTitle> Conteúdos Acessados: 406 </AvaliationsTitle>
                        </CenterDiv>
                        <CenterDiv>
                            <ButtonFollow> Seguir</ButtonFollow>
                        </CenterDiv>
                    </WrapDiv>
                </ContainerUser>
                <BreakLine numberLines={1}/>
                <InformationDiv>
                    <InformationSubDiv>
                        <DisciplineName> Publicações</DisciplineName>
                        <TitleAchievement> {this.props.user.publicacoes} </TitleAchievement>
                    </InformationSubDiv>
                    <InformationSubDiv>
                        <DisciplineName> Seguidores</DisciplineName>
                        <TitleAchievement> {this.props.user.seguidores} </TitleAchievement>
                    </InformationSubDiv>
                    <InformationSubDiv>
                        <DisciplineName> Seguindo</DisciplineName>
                        <TitleAchievement> {this.props.user.seguindo} </TitleAchievement>
                    </InformationSubDiv>
                </InformationDiv>
            </>
        );
    };
}