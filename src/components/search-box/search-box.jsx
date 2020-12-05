import * as React from 'react';
import ReactShadowScroll from 'react-shadow-scroll';

import { requestAxios, api } from '../../http/axios-http';
import { DisciplinasModel } from '../../models/disciplinas.models';

import { 
    SearchBarInput, 
    SearchBarDiv, 
    SearchBarResult, 
    SearchBarLoad,
    SearchBarUl,
    SearchBarLi
} from "./search-box.style";

import { StyledLink } from '../fonts/fonts.style';

export class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isSearch: false,
            isLoading: false,
            name: '',
            typing: false,
            typingTimeout: 0,
            list: []
        }
        this.changeName = this.changeName.bind(this);
    }

    changeName = (event) => {
        const self = this;

        if (self.state.typingTimeout) {
            clearTimeout(self.state.typingTimeout);
        }

        self.setState({
            name: event.target.value,
            typing: false,
            isSearch: true,
            isLoading: true,
            typingTimeout: setTimeout(function () {
                self.handleRequestAxios(self.state.name);
                }, 2500)
        });
    }

    handleRequestAxios = async (textInput) => {
        const self = this;
        try{
            const answer = await requestAxios({
                url: api+'/disciplinas/'+textInput,
                method: 'get'
            });
            self.setState({
                list: (DisciplinasModel(answer.body)),
                isLoading: false            
            });
        }catch(error){
            console.log(error);
            self.setState({
                list: [{
                   name : 'Nenhuma Disciplina',
                   codigoDisciplina: 'encontrada'
                }],
                isLoading: false            
            });
        }
    }

    render() {
        return (
            <SearchBarDiv>
                <SearchBarInput search={ this.state.isSearch } onChange={this.changeName} />
                { this.state.isSearch && (
                    <SearchBarResult search={ this.state.isSearch }>
                    { this.state.isLoading 
                        ? <SearchBarLoad/>  
                        : (
                        <ReactShadowScroll isShadow={false} scrollColor={"#FDAF2D"} scrollColorHover={"#1094AB"} >
                            <SearchBarUl>
                                {
                                    this.state.list.length === 0 
                                    ? (<></>)
                                    : ( this.state.list.map((item) => (
                                        <React.Fragment key={item.codigoDisciplina+item.name}>
                                            <StyledLink 
                                                to={{
                                                    pathname: '/disciplina/'+item.codigoDisciplina,
                                                    state: { nomeDisciplina: item.name }
                                                }}
                                            >
                                                <SearchBarLi >{item.name + ' ' + item.codigoDisciplina}</SearchBarLi>
                                            </StyledLink>
                                        </React.Fragment>
                                        )
                                    ))
                                }
                            </SearchBarUl>
                        </ReactShadowScroll>
                    )}
                    </SearchBarResult>
                )}
            </SearchBarDiv>
        );
    };
}