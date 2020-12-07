import React, {useState, useEffect} from 'react';

import { useHistory, useLocation } from "react-router-dom";
import { requestAxios, api } from '../http/axios-http';

import { ProfessoresModel } from '../models/professores.models';
import { CommentsModel } from '../models/comments.models';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BodyContainer } from '../components/body/style';
import { NavigationBar } from '../components/navigation-bar/navigation-bar';
import { DescricaoProfs } from '../components/descricao-profs/descricao-profs';
import { Comments } from '../components/comments/comments';
import { SelectGroup } from '../components/select-group/select-group';

const pageName="Laboratório de Engenharia de software - PCS 3643 - Professores ";

const professorInfo = {
    name: 'Jorge Luiz Risco',
    email: 'jorge.becerra@poli.usp.br',
    pesquisas: [
       'Engenharia de Software e Banco de Dados',' Automação', 
       'Sistemas de Informação e Aplicações Computacionais'
    ],
}

const professores = [
    {value: 'Risco', label: 'Jorge Luiz Risco'},
    {value: 'Keichi', label: 'Keichi'},
    {value: 'foda', label: 'foda-se'}
]

export const AvaliacaoProfs = (props) => {
    let location = useLocation();
    let history = useHistory();

    const codigoDisciplina = props.match.params.codigoDisciplina;
    const nomeDisciplina = location.state.nomeDisciplina;

    const [loading, setLoading] = useState(false);
    const [comentarios, setComentarios] = useState(null);
    const [loadingComentarios, setLoadingComentarios] = useState(false);
    const [professores, setProfessores] = useState(null);
    const [professor, setProfessor] = useState(null);

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    const handleComentariosProfessores = async (idProfessor) => {
        try{
            setLoadingComentarios(true);
            const answer = await requestAxios({
                url: api+'/comentariosProfessores/'+idProfessor,
                method: 'get'
            });
            setComentarios(CommentsModel(answer.body, answer.statusCode));
            setLoadingComentarios(false);
        }catch(error){
            console.log(error);
        }
    }

    const handleRequestAxios = async () => {
        try{
            setLoading(true);
            const answer = await requestAxios({
                url: api+'/professores/'+codigoDisciplina,
                method: 'get'
            });
            const professoresVar = ProfessoresModel(answer.body);
            handleComentariosProfessores(professoresVar[0].id);
            setProfessores(professoresVar);
            setProfessor(professoresVar[0]);
            setLoading(false);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        handleRequestAxios();
    }, []);

    const handleOnChange = (selectedOptions) => {
        setFuncProfessor(selectedOptions.value);
    }

    const setFuncProfessor = (selectedOptions) => {
        for (var i = 0 ; i < professores.length ; i++ ) {
            if(i === selectedOptions){
                setProfessor(professores[i]);
                handleComentariosProfessores(professores[i].id);
                return;
            }
        }
    }

    const professorSelect = () => (
        professores.map((professor, index) => ({
            value: index,
            label: professor.name
        }))
    )

    return (
        <>
            <Header isLogged={true}/>
            <BodyContainer>
                <NavigationBar pageName={nomeDisciplina + ' '+ codigoDisciplina} back={back}/>
                {!loading && professores !== null && (<>
                    <SelectGroup professores={professorSelect()} onChange={handleOnChange}/>
                    <DescricaoProfs professorInfo={professor} />
                </>)}
                <Comments commentsSection={comentarios} loading={loadingComentarios}/>
                <Footer/>
            </BodyContainer>
        </>
    ); 
}