import styled from 'styled-components';

export const HeaderPrimaryDiv = styled.header`
    padding: 0 12% 0 12%;
    display: flex;
    justify-content: space-between;
`;

export const HeaderDiv = styled.header`
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
    @media(max-width: 600px) {
        display: none;
    }
`;

export const TextEntrar = styled.button`
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
    line-height: 20px;
    vertical-align: center;
    
    cursor: pointer;
    color: #FDAF2D;
    
    &:hover{
        background: #E7E7E7;
    }
`;

export const TextRegister = styled.button`
    width: 104px;
    height: 24px;
    background: #FDAF2D;
    border: 2px solid #FDAF2D;
    border-radius: 12px;
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;

    color: #FFFFFF;
    
    &:hover{
        background: #E99100;
    }
`;

export const ButtonHamburguerDiv = styled.div`

    padding: 28px 0;

    @media(min-width: 600px) {
        display: none;
    }  
`;

export const HeaderSubDiv = styled.div`
    
    max-height: ${ props => props.hide ? "0px" : "60px" };
    color: #FFFFFF;
    transition: max-height 1s ease-in-out;
    overflow:hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 600px) {
        display: none;
    }  
`;

export const LinkHeader = styled.a`
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #1094AB;
`;

export const LinkDiv = styled.div`
    width: 100px;
`;