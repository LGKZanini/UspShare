import * as React from 'react';
import ReactShadowScroll from 'react-shadow-scroll';

import { 
    SearchBarInput, 
    SearchBarDiv, 
    SearchBarResult, 
    SearchBarLoad,
    SearchBarUl,
    SearchBarLi
} from "./search-box.style";

import { StyledLink } from '../fonts/fonts.style';

const list = [
    {
        materia: 'Laboratório de engenharia de software', 
        siglaDisciplina: 'PCS3443'
    }, 
    {
        materia: 'Laboratório eletrônica',
        siglaDisciplina: 'PSI3032',
    },
    {  
        materia: 'Laboratório circuitos',
        siglaDisciplina: 'PSI3031'
    }
];

export class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isSearch: false,
            isLoading: false,
            textInput: ''
        }
    }

    changeTextSearchBar = (event) => {
        const text = event.target.value;

        if(text.length !== 0){
            this.setState({
                isSearch: true,
                textInput: text
            })
        }else{
            this.setState({
                isSearch: false,
                textInput: text
            })
        }
    }

    render() {
        return (
            <SearchBarDiv>
                <SearchBarInput search={ this.state.isSearch } onChange={this.changeTextSearchBar} />
                { this.state.isSearch && (
                    <SearchBarResult search={ this.state.isSearch }>
                    { this.state.isLoading 
                        ? <SearchBarLoad/>  
                        : (
                        <ReactShadowScroll isShadow={false} scrollColor={"#FDAF2D"} scrollColorHover={"#1094AB"} >
                            <SearchBarUl>
                                {list.map(function(item) {
                                    return (
                                        <React.Fragment key={item.siglaDisciplina+item.materia}>
                                            <StyledLink 
                                                to={{
                                                    pathname: '/disciplina/'+item.siglaDisciplina,
                                                    state: { nomeDisciplina: item.materia }
                                                }}
                                            >
                                                <SearchBarLi >{item.materia}</SearchBarLi>
                                            </StyledLink>
                                        </React.Fragment>
                                    );
                                })}
                            </SearchBarUl>
                        </ReactShadowScroll>
                    )}
                    </SearchBarResult>
                )}
            </SearchBarDiv>
        );
    };
}