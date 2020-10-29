import styled from 'styled-components';
import returnArrow from '../../img/icons/returnArrow.png'

export const NavigationDiv = styled.div`
    padding: 0 12% 0 12%;
    display: flex;
    height: 60px;
    background: #1094AB;

    @media(max-width: 650px) {
        height: 80px;
    }
`;

export const ButtonReturn = styled.button`
    width: 40px;
    height: 40px;
    margin: auto 10px;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline:none;

    background-color: Transparent;
    background-image: url(${ () => returnArrow });
    background-repeat: no-repeat;
    
`;

export const TextPage = styled.span`
    margin: auto 0;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    text-align: center;

    color: #000000;
    
    @media(max-width: 1200px) {
        font-size: 14px;
    }

`;