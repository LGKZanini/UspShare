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
        return (
            <>
                <ContainerUser>
                    <CenterDiv>
                        <PerfilImage auto={true} size={3} ranking={50}/>
                    </CenterDiv>
                    <WrapDiv>
                        <CenterDiv>
                            <TitleName> Mateus Souza </TitleName>
                            <DisciplineName> Engenharia Elétrica </DisciplineName>
                            <AvaliationsTitle> Numero de avaliações: {this.props.user.avaliations}</AvaliationsTitle>
                            <AvaliationsTitle> Conteúdos Acessados: {this.props.user.acess}</AvaliationsTitle>
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
                        <TitleAchievement> 256 </TitleAchievement>
                    </InformationSubDiv>
                    <InformationSubDiv>
                        <DisciplineName> Seguidores</DisciplineName>
                        <TitleAchievement> 406 </TitleAchievement>
                    </InformationSubDiv>
                    <InformationSubDiv>
                        <DisciplineName> Seguindo</DisciplineName>
                        <TitleAchievement> 310 </TitleAchievement>
                    </InformationSubDiv>
                </InformationDiv>
            </>
        );
    };
}