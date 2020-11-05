import styled from 'styled-components';
import StatusButton from '../../img/button/statusButton.png';

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
    display: flex;
    justify-content: center;
    @media(max-width: 600px) {
        display: none;
    }
`;

export const TextLoginSubDiv = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
`;

export const ButtonStatus = styled.button`
    display: block;
    width: 25px;
    height: 10px;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline:none;

    background-color: Transparent;
    background-image: url(${ () => StatusButton });
    background-repeat: no-repeat;
    transform: ${ props => props.click ? "rotate(180deg)" : "rotate(0deg)"};
`

export const ButtonStatusDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;
`;

export const ButtonLabel = styled.div`
    position: absolute;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
    display: flex;
    width: 250px;
    height: 144px;
    top: 75px;

    background: #FFFFFF;
    mix-blend-mode: normal;
    border: 1px solid #FDAF2D;
    box-sizing: border-box;
    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12);

    max-height: "144px";
    transition: max-height 1s ease-in-out;
    overflow:hidden;
`;

export const ButtonPerfil = styled.span`
    display: block;
    cursor: pointer;
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    text-align: center;
    color: #1094AB;
`;

export const ButtonSair = styled.span`
    display: block;
    cursor: pointer;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;

    text-align: center;
    color: #1094AB;
`;