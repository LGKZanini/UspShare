import * as React from 'react';
import { FooterDiv, TextFooter } from "./footer.style";

export class Footer extends React.Component {

    render() {
        return (
            <FooterDiv>
                <TextFooter> Usp Share · 2020 © Todos os direitos reservados </TextFooter>
            </FooterDiv>
        );
    };
}