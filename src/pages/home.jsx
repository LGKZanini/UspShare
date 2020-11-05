import React from 'react';

import { Header } from '../components/header/header';
import { BodyContainer } from '../components/body/style';
import { Label } from '../components/label/label';
import { Footer } from '../components/footer/footer';
import { SearchBar } from '../components/search-box/search-box';

import { TitlePrinciple, SubTitle, BreakLine}  from '../components/fonts/fonts.style';

import BookIcon from '../img/icons/bookIcon.png';
import ComputerIcon from '../img/icons/computerIcon.png';
import likeIcon from '../img/icons/likeIcon.png';
import MedalhaIcon from '../img/icons/medalhaIcon.png';

import { useHistory } from "react-router-dom";

const contentLabel = [
    {
        titleMessage: "Compartilhe arquivos!",
        subMessage: "Compartilhe todos os tipos de arquivos!",
        iconUrl: BookIcon,
    },
    {
        titleMessage: "Busque uma disciplina",
        subMessage: "Faça busca inteligentes! Procure por inúmeros conteúdos oferecidos por alunos da USP.",
        iconUrl: ComputerIcon,
    },
    {
        titleMessage: "Ganhe Recompensas!",
        subMessage: "Ganhe experiência ao compartilhar e acessar conteúdos, podendo subir de nível e ganhar recompensas!",
        iconUrl: likeIcon,
    },
    {
        titleMessage: "Avalie o conteúdo",
        subMessage: "Avalie o conteúdo postado por outros alunos!",
        iconUrl: MedalhaIcon,
    }
]


export const Home = () => {
   
    return (
            <>
                <Header/>
                <BodyContainer>
                    <BreakLine numberLines={1}/>
                    <TitlePrinciple>Conheça o USP share</TitlePrinciple>
                    <TitlePrinciple>O melhor site para consulta de material da USP</TitlePrinciple>
                    <BreakLine numberLines={2}/>
                    <SubTitle>Faça uma busca pela disciplina que deseja</SubTitle>
                    <SearchBar />
                    <Label labelContent={contentLabel}/>
                    <Footer/>
                </BodyContainer>
            </>
    );
}