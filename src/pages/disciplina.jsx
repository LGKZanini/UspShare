import React from 'react';

import { Header } from '../components/header/header';
import { BodyContainer } from '../components/body/style';
import { Label } from '../components/label/label';
import { Footer } from '../components/footer/footer';
import { SearchBar } from '../components/search-box/search-box';
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
    },
    
]

const pageName="Cálculo 4";

export class Disciplina extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            rating: 5 // VALOR MOCKADO
        }
    }

    render(){
       return (
            <>
                <Header/>
                <BodyContainer>
                    <NavigationBar pageName={pageName}/>
                    <BreakLine numberLines={1}/>
                    <TitlePrinciple>Dificuldade</TitlePrinciple>
                    <DivCenter>
                        <Rating
                            name={this.props.index}
                            value={this.state.rating}
                            onChange={ this.handleChange }
                        />
                    </DivCenter>
                    <SubTitle3> Avaliações: 102</SubTitle3>
                    <Label labelContent={contentLabel}/>
                    <Comments />
                    <Footer/>
                </BodyContainer>
            </>
       ); 
    }
}