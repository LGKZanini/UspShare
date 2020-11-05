import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitlePrinciple = styled.span`
    display: block;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    text-align: center;

    color: #000000;
`;

export const SubTitle = styled.span`
    display: block;
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    text-align: center;

    color: #000000;
`;

export const SubTitle2 = styled.span`
    display: block;
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 45px;
    text-align: center;

    color: #000000;
`;

export const SubTitle3 = styled.span`
    display: block;
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #505252;
`;

export const BreakLine = styled.div`
    height: ${ props => props.numberLines * 48 + "px"};
`;

export const DivCenter = styled.div`
    padding: 0 45.5%;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    outline:none;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;