import * as React from 'react';

import { ButtonListDiv, ButtonSimple, TitleList, ButtonSimpleDiv, OutPutDiv} from "./button-list.style";
import { LabelRenderList } from '../library-list-render/library-list-render';

const contetList = [
    {text: "Calculo 1", date: "20/03", userName: "Joãozinho", votes: 3, codigoDisciplina: 'MAT2453'}, 
    {text: "Introdução a programação", date: "23/09", userName: "Pedrinho", votes: 5, codigoDisciplina:'MAC3116' }, 
    {text: "Energia e meio ambiente", date: "04/12", userName: "Juquinha", votes: 10, codigoDisciplina: 'PEA3100' }
];

export class ButtonList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            click : false
        }
    }

    handleClick = () => {
        this.setState({
            click: !this.state.click
        })
    }

    render() {
        return (
        <div>
            <ButtonListDiv>
                <div>
                    <TitleList>  {this.props.title}  </TitleList>
                </div>
                <ButtonSimpleDiv>
                    <ButtonSimple click={this.state.click} onClick={this.handleClick} />
                </ButtonSimpleDiv>
            </ButtonListDiv>
            <OutPutDiv hide={this.state.click}>
                {this.props.content != undefined 
                    ? (<LabelRenderList contetList={this.props.content} isTrash={this.props.isTrash} />)
                    : (<LabelRenderList contetList={contetList} isTrash={this.props.isTrash} />)
                }
            </OutPutDiv>
        </div>
        );
    };
}