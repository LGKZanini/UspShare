import styled from 'styled-components';
import SendButtonImg from '../../img/button/sendButton.png';

export const SendButton = styled.button`
    display: block;
    width: 64px;
    height: 48px;

    background-color: #FDAF2D;
    background-image: url(${ () => SendButtonImg });
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    border: none;   
    cursor: pointer;
    overflow: hidden;
    outline:none;

    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12);
`;

export const CommentTextArea = styled.textarea`
    display: block;
    margin-right: 10px;
    height: 48px;
    width: 100%;
    padding: 8px;

    overflow: hidden;
    outline:none;

    background: #FFFFFF;
    border: 1px solid #FDAF2D;
    box-sizing: border-box;
    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12);
    border-radius: 5px;

    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.5em;

    color: #505252;
`;

export const InputDiv = styled.div`
    display: flex;
    padding-left: ${ props => props.isSubComment ? "80px" : "0px" };
`;