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

const list = ['link1', 'link2', 'link3'];

export class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isSearch: false,
            isLoading: false,
        }
    }

    changeTextSearchBar = (event) => {
        const text = event.target.value;

        if(text.length !== 0){
            this.setState({
                isSearch: true
            })
        }else{
            this.setState({
                isSearch: false
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
                                    return <SearchBarLi key={item}>{item}</SearchBarLi>;
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