import * as React from 'react';

import {
    Link
  } from "react-router-dom";

import { 
    TextRegister
} from "./style";


export class ButtonTextRegistrar extends React.Component {

    render() {
        return (
            <Link to="/login"><TextRegister>Entrar</TextRegister></Link>
        );
    };
}