import styled from 'styled-components';

export const TitleName = styled.span`
    display: block;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 60px;
    text-align: center;

    color: #000000;

    @media only screen and (min-width: 1060px) and (max-width: 1200px) {
        font-size: 48px;
    }

    @media  only screen and (min-width: 800px) and (max-width: 1060px) {
        font-size: 32px;
    }
    @media(max-width: 800px) {
        font-size: 24px;
    }
`;

export const DisciplineName = styled.span`
    display: block;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 12px;
    text-align: center;

    color: #000000;
    
    @media only screen and (min-width: 1060px) and (max-width: 1200px) {
        font-size: 24px;
    }

    @media only screen and (min-width: 800px) and (max-width: 1060px){
        font-size: 16px;
    }

    @media only screen and (max-width: 800px){
        font-size: 14px;
    }
`;

export const TitleAchievement = styled.span`
    display: block;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    text-align: center;

    color: #000000;
    
    @media only screen and (min-width: 1060px) and (max-width: 1200px) {
        font-size: 36px;
        height: 45px;
        width: 120px;
    }

    @media(max-width: 1060px) {
        font-size: 24px;
        height: 30px;
        width: 80px;
    }

    @media only screen and (min-width: 1200px) {
        margin-left: 20px;
    }
`;

export const ButtonFollow = styled.button`
    display: block;

    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    background-color: #FDAF2D;
    border-radius: 10px;
    height: 56px;
    width: 160px;
    
    color: #FFFFFF;
    border: none;   
    cursor: pointer;
    overflow: hidden;
    outline:none;

    @media only screen and (min-width: 1060px) and (max-width: 1200px) {
        font-size: 24px;
        height: 45px;
        width: 120px;
    }

    @media(max-width: 1060px) {
        font-size: 16px;
        height: 30px;
        width: 80px;
    }

    @media only screen and (min-width: 1200px) {
        margin-left: 28px;
    }
`;

export const AvaliationsTitle = styled.span`
    display: block;

    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-align: center;

    color: #000000;

    @media only screen and (min-width: 1060px) and (max-width: 1200px) {
        font-size: 18px;
    }

    @media(max-width: 1060px) {
        font-size: 14px;
    }
`;

export const CenterDiv = styled.div`
    margin-top: 10px;
    margin-left: 20px;
    
    display: flex;
    flex-direction: column;    
    justify-content: center;
    align-items: center;

    @media(max-width: 670px) {
        flex-grow: 1;
    }
`;

export const WrapDiv = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;

    @media(max-width: 670px) {
        flex-grow: 1;
    }
`;

export const ContainerUser = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 12% 0 12%;
`;

export const InformationDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 12% 0 12%;
`;

export const InformationSubDiv = styled.div`
    margin-right: 5px;
`;