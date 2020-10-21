import styled from 'styled-components';

export const LabelStarDiv = styled.div`
    height: 48px;
    margin: 2.4px 2px;
    display: flex;
    justify-content: space-between;

    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;

    @media(max-width: 600px) {
        height: 92px;
    }
`

export const LabelButtonText = styled.span`
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;

    align-items: center;
    text-align: center;

    color: #000000;
`;

export const LabelButtonDiv = styled.div`
    height: 40px;
    margin: 2.4px 2px;
    display: flex;
    justify-content: space-between;
    padding: 8px;

    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
`

export const LabelDateStarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 260px;


    @media(max-width: 600px) {
        flex-direction: column;
        width: 140px;
    }
`;

export const DateContent = styled.span`
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
`;

export const NameUserContent = styled.span`
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
`;

export const LabelButtonTextDiv = styled.div`
    display: flex ;
    align-content: center;
    flex-wrap: wrap;
`;

export const LabelButtonCenterDiv = styled.div`
    height: 24px;
`;

export const LabelTextStarVotes = styled.span`
    display: block;
    margin: auto 0;
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    text-align: center;

    color: #505252;
`;