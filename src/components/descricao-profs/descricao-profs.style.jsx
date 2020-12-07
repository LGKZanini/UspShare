import styled from 'styled-components';

export const TextNomeProf = styled.span`
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 40px;
    margin: 0px;
    color: #000000;

    @media(max-width: 450px) {
        font-size: 24px;
    }
`;

export const TextTitle = styled.span`
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 30px;

    color: #000000;
`;

export const BodyDescription = styled.div`
    margin-left: 12%;
    color: #000000;
`;

export const NeckDescription = styled.div`
    margin-left: 40px;
    margin-top: 8px;
    color: #000000;
`;

export const UserDescription = styled.div`
    margin-top: 20px;
    margin-left: 12%;
    display: flex;
    flex-wrap: wrap;
    color: #000000;
`;

export const Borda = styled.img`
    display: block;
    height: 150px;
    width: 150px;
    margin-top: 30px;
    margin-left: 0px;
    border-radius: 100%;
    border: 5px solid #FDAF2D;

`;

export const TextDescricao = styled.span`
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 30px;

    color: #000000;
`;