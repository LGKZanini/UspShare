import React, { useState, useEffect } from 'react';

import { requestAxios, api } from '../http/axios-http';
import { useLocation, useHistory } from "react-router-dom";

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BodyContainer } from '../components/body/style';
import { NavigationBar } from '../components/navigation-bar/navigation-bar';
import { PageStyles } from '../components/page-styles/page-styles';
import { ButtonList } from '../components/library-list/button-list';
import { BreakLine } from '../components/fonts/fonts.style'
import { PublicacoesModel } from '../models/publicacoes.models'

const pageName = "Laboratório engenharia de Software";
const titulo = "Materiais disponíveis ";
const titles = ["Semestre Atual", "Semestre 2", "Semestre 3", "Semestre 4"]

export const MaterialApoio = (props) => {
    let history = useHistory();
    let location = useLocation();

    const codigoDisciplina = props.match.params.codigoDisciplina;
    const nomeDisciplina = location.state.nomeDisciplina;
    const [material, setMaterial] = useState(null);

    const handleRequestAxios = async () => {
        try{
            const answer = await requestAxios({
                url: api+'/publicacoes/'+codigoDisciplina,
                method: 'get'
            });
            setMaterial(PublicacoesModel(answer.body));
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        handleRequestAxios();
    }, []);

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    console.log(material);           

    return (
        <>
            <Header isLogged={true} />
            <BodyContainer>
                <NavigationBar pageName={nomeDisciplina} back={back} />
                <PageStyles titulo={titulo} />
                <BreakLine numberLines={1} />
                <div>
                    {
                        material !== null && ( 
                            material.map((list, index) =>
                            <ButtonList key={list.key.toString() + index} title={list.key} content={list.values}/>
                        ))
                    }
                </div>

                <BreakLine numberLines={4} />
                <Footer />
            </BodyContainer>

        </>
    );
}