import styled from 'styled-components';

export const HeaderDiv = styled.header`
    padding: 0 12% 0 12%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12);
`;

export const Logo = styled.div`
    width: 185px;
    align-items: center;
`;

export const Buttons = styled.div`
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TextEntrar = styled.a`
    width: 104px;
    height: 24px;
    background: #FFFFFF;
    border: 2px solid #FDAF2D;
    box-sizing: border-box;
    border-radius: 12px;
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    line-height: 21px;
    color: #FDAF2D;
    &:hover{
        background: #E7E7E7;
    }
`;

export const TextRegister = styled.a`
    width: 104px;
    height: 24px;
    background: #FDAF2D;
    border-radius: 12px;
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    &:hover{
        background: #E99100;
    }
`;