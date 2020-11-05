import * as React from 'react';

import { ButtonListDiv, ButtonSimple, TitleList, ButtonSimpleDiv, OutPutDiv} from "./button-list.style";
import { LabelRenderList } from '../library-list-render/library-list-render';

const contetList = [
    {text: "Exemplo aqui", date: "20/03", userName: "Joãozinho", votes: 3}, 
    {text: "Outro exemplo", date: "23/09", userName: "Pedrinho", votes: 5}, 
    {text: "Calculo aqui", date: "04/12", userName: "Juquinha", votes: 10}
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
                    <TitleList> {this.props.title}  </TitleList>
                </div>
                <ButtonSimpleDiv>
                    <ButtonSimple click={this.state.click} onClick={this.handleClick} />
                </ButtonSimpleDiv>
            </ButtonListDiv>
            <OutPutDiv hide={this.state.click}>
                <LabelRenderList contetList={contetList} isTrash={this.props.isTrash} />
            </OutPutDiv>
        </div>
        );
    };
}