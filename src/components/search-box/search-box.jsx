import * as React from 'react';
import ReactShadowScroll from 'react-shadow-scroll';

import { 
    SearchBarInput, 
    SearchBarDiv, 
    SearchBarResult, 
    SearchBarLoad,
    SearchBarUl,
    SearchBarLi
} from "./style";

import {Link} from 'react-router-dom';

const list = ['link1', 'link2', 'link3'];

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
                                    return <Link to='/disciplina'><SearchBarLi key={item}>{item}</SearchBarLi></Link>;
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