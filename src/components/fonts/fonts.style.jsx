import styled from 'styled-components';

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

export const BreakLine = styled.div`
    height: ${ props => props.numberLines * 48 + "px"};
`;