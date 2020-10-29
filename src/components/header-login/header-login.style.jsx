import styled from 'styled-components';

export const TextUser = styled.span`
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-align: center;

    color: #000000;
`;


export const TextCourse = styled.span`
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;

    color: #000000;
`;

export const TextLoginDiv = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 600px) {
        display: none;
    }
`;

export const TextLoginSubDiv = styled.div`
    display: inline-flex;
    flex-direction: column;
`;