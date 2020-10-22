import styled from 'styled-components';

export const ContainerLabel = styled.div`
    width: 76%;
    height: 580px;

    padding: 4% 12% 4% 12%;
    display: flex;  
    justify-content: space-between;
    align-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    margin: 0px 0px 40px 00px;

    @media(max-width: 828px) {
        height: 1300px;
        justify-content: center;
    }
`;

export const LabelDiv = styled.div`
    width: 220px;
    height: 280px;
    margin: 10px 12px 10px 12px;
    padding: 14px;

    background: #FFFFFF;
    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
`;

export const LabelTitle = styled.span`
    display: block;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    
    font-size: 24px;
    line-height: 30px;
    text-align: center;
`;

export const LabelSubMessage = styled.span`
    display: block;
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;

    font-size: 18px;
    line-height: 21px;
    text-align: center;
`;

export const LabelImage = styled.img`
    display: block;
    margin: 18px auto;
    text-align: center;
`;