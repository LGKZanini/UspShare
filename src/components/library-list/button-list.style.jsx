import styled from 'styled-components';

import ButtonList from '../../img/button/simpleButton.png';

export const ButtonListDiv = styled.div`
    border-radius: 10px;

    display: flex;
    height: 40px;
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;

    background-color: rgba(16, 148, 171, 0.8);

`;

export const TitleList = styled.span`
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 45px;
    margin-left: 10px;
    text-align: center;

    color: #000000;
`;

export const ButtonSimple = styled.button`

    width: 25px;
    height: 10px;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline:none;

    background-color: Transparent;
    background-image: url(${ () => ButtonList });
    background-repeat: no-repeat;
    transform: ${ props => props.click ? "rotate(180deg)" : "rotate(0deg)"};
`

export const ButtonSimpleDiv = styled.div`
    padding: 10px;
`;

export const OutPutDiv = styled.div`
    
    max-height: ${ props => props.hide ? "4000px" : "0px" };
    color: #FFFFFF;
    transition: max-height 0.5s;
    overflow:hidden;
    margin: 0 auto;

    width: 80%;

    background: rgba(213, 215, 215, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;
