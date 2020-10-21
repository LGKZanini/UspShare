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

    @media(max-width: 828px) {
        height: 1180px;
        justify-content: center;
    }
`;

export const LabelDiv = styled.div`
    width: 240px;
    height: 280px;
    margin: 10px 12px 10px 12px;

    background: #FFFFFF;
    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
`;