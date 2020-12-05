import React, { useState, useEffect } from 'react';

import { requestAxios, api } from '../http/axios-http';
import { CommentsModel } from '../models/comments.models';

import { useLocation, useHistory } from "react-router-dom";

import { Header } from '../components/header/header';
import { BodyContainer } from '../components/body/style';
import { Label } from '../components/label/label';
import { Footer } from '../components/footer/footer';
import { Comments } from '../components/comments/comments';
import { NavigationBar } from '../components/navigation-bar/navigation-bar';

import { TitlePrinciple, SubTitle3, BreakLine, DivCenter}  from '../components/fonts/fonts.style';

import BookIcon from '../img/icons/bookIcon.png';
import CalendarIcon from '../img/icons/calendarIcon.png';
import OferecimentoIcon from '../img/icons/oferecimentoIcon.png';

import Rating from '@material-ui/lab/Rating';



const contentLabel = [
    {
        titleMessage: "Materias De Apoio",
        subMessage: "Confira o material fornecido por alunos que já cursaram a disciplina ou que estão cursando",
        iconUrl: BookIcon,
        redirectUrl: "/material-apoio",
    },
    {
        titleMessage: "Cronogramas",
        subMessage: "Tipos de cronogramas de estudo fornercido por alunos que já cursaram essa disciplina",
        iconUrl: CalendarIcon,
    },
    {
        titleMessage: "Oferecimentos",
        subMessage: "Comentários sobre a diferença entre a metodologia de ensino dos professores que dão a matéria.",
        iconUrl: OferecimentoIcon,
        redirectUrl: "/avaliacao-profs",
    },
    
]

export const Disciplina = (props) => {

    const [rating, setRating] = useState(5);
    const [commentsSection, setCommentsSection] = useState(null);
    const [loading, setLoading] = useState(false);

    let location = useLocation();
    let history = useHistory();

    const pageName = location.state.nomeDisciplina;
    const codigoDisciplina = props.match.params.oferecimento;

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    const handleChange = ( event, newValue) => {
        setRating(newValue);
    };

    const handleRequestAxios = async () => {
        try{
            setLoading(true);
            const answer = await requestAxios({
                url: api+'/comentarios/'+codigoDisciplina,
                method: 'get'
            });
            setCommentsSection(CommentsModel(answer.body));            
            setLoading(false);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        handleRequestAxios();
    }, []);
    
    console.log(commentsSection);

    return (
            <>
                <Header isLogged={true}/>
                <BodyContainer>
                    <NavigationBar pageName={pageName} back={back}/>
                    <BreakLine numberLines={1}/>
                    <TitlePrinciple>Dificuldade</TitlePrinciple>
                    <DivCenter>
                        <Rating
                            name={props.index}
                            value={rating}
                            onChange={handleChange}
                        />
                    </DivCenter>
                    <SubTitle3> Avaliações: 102</SubTitle3>
                    <Label labelContent={contentLabel} pageName={pageName}/>
                    <Comments loading={loading} commentsSection={commentsSection} />
                    <Footer/>
                </BodyContainer>
            </>
    );
}