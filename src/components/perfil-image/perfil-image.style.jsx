import styled from 'styled-components';

export const PerfilImageDiv = styled.div`
    display: flex;
    position: relative; 
    width: ${props => props.size*64+"px" };
    height: ${props => props.size*64+"px" };
`;

export const Image = styled.img`
    width: 100%;
    height: auto;

    border-style: solid;
    border-color: #FDAF2D;
    border-width: 4px;

    border-radius: 50%;
`;

export const PerfilRating = styled.span`
    display: block;
    position: absolute;
    width: ${props => props.size*20+"px" };
    height: ${props => props.size*18+"px" };

    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    font-size: ${props => props.size*12+"px" };
    line-height: ${props => props.size*15+"px" };

    background-color: #ffffff;

    border-style: solid;
    border-color: #FDAF2D;
    border-width: 3.5px;
    border-radius: 50%;

    left: 36%;
    top: 80%;
`; 