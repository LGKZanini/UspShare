import styled from 'styled-components';

export const ContainerLabel = styled.div`
    padding: 4% 12% 4% 12%;
    display: flex;  
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    height: 580px;

    @media(max-width: 648px) {
        height: 1160px;
        justify-content: center;
    }
`;

export const LabelDiv = styled.div`
    width: 240px;
    height: 280px;

    background: #FFFFFF;
    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
`;