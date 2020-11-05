import React from 'react';

import {
    useHistory
  } from "react-router-dom";

import { Login } from '../components/login/login';

export  const Entrar = () =>  {
    let history = useHistory();
    let back = e => {
        e.stopPropagation();
        history.goBack();
    };  
    return (
        <div>
            <div
                onClick={(back)}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    background: "rgba(0, 0, 0, 0.15)"
                }}
                >
                <div
                    className="modal"
                    style={{
                    position: "absolute",
                    top: 25,
                    left: "10%",
                    right: "10%"
                    }}
                >
                    <Login/>
                </div>
            </div>
        </div>
    ); 
    
}