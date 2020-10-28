import styled from 'styled-components';
import facebook from '../../img/button/facebookButton.png';
import google from '../../img/button/googleButton.png';

export const LoginContainer = styled.div`
    display: flex;
    height: 600px;
`;

export const LoginRegister = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 514px;
    border-radius: 0px 12px 12px 0px;
    
    background-color: #64C4D2;
    @media(max-width: 680px) {
        display: none;
    }   
`;

export const LoginInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 514px;
    border-radius: 12px 0px 0px 12px;

    background-color: #ffffff;
`;

export const LoginTitle = styled.span`
    display: block;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    text-align: center;

    color: #1094AB;
`;

export const SubTitleLogin = styled.span`
    display: block;
    width: 280px;

    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #FFFFFF;
`;

export const RegisterButton = styled.button`
    width: 180px;
    height: 40px;

    background-color: #64C4D2;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 100px;
    cursor: pointer;
    overflow: hidden;
    outline:none;

    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #FFFFFF;
`
export const ButtonGoogle = styled.button`
    width: 50px;
    height: 50px;
    
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline:none;
    background-color: Transparent;
    background-image: url(${ () => google });
    background-repeat: no-repeat;    
`;

export const ButtonFacebook = styled.button`
    width: 50px;
    height: 50px;

    margin-left: 12px;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline:none;
    background-color: Transparent;
    background-image: url(${ () => facebook });
    background-repeat: no-repeat ;
`;

export const ContainerButtons = styled.div`
    display: flex;
`;

export const InputType = styled.input`
    width: 260px;
    height: 44px;
    padding: 0 0 0 38px;
    border-radius: 10px;

    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;

    border: none;

    background-color: #EBEBEB;
    background-image: url(${ (props) => props.img});
    background-repeat: no-repeat ;
    background-position: 10px 10px;
`;

export const TextForget = styled.span`
    display: block;

    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    text-align: center;

    color: #1094AB;
`;

export const ClickRegister = styled.a`
    display: block;
    margin-left: 5px;

    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    cursor: pointer;

    color: #1094AB;
`;

export const ForgetTextDiv = styled.div`
    display: flex;
`;

export const ButtonEntrar = styled.button`
    width: 211px;
    height: 40px;

    background: #FDAF2D;
    border-radius: 100px;
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline:none;

    color: #FFFFFF;
`;


export const LoginSignIn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 514px;
    border-radius: 12px 0px 0px 12px;
    
    background-color: #64C4D2;
    @media(max-width: 680px) {
        display: none;
    }   
`;

export const LoginRegisterInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 514px;
    border-radius: 0px 12px 12px 0px;

    background-color: #ffffff;
`;