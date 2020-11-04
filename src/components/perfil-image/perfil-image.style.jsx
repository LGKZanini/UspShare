import styled from 'styled-components';

export const PerfilImageDiv = styled.div`
    display: flex;
    position: relative; 
    width: ${props => props.size*64+"px" };
    height: ${props => props.size*64+"px" };

    @media only screen and (min-width: 1600px){
        width: ${props => props.auto &&  "384px"};
        height: ${props => props.auto &&  "384px"};
    }

    @media only screen and (min-width: 1300px) and (max-width: 1600px){
        width: ${props => props.auto && "320px"};
        height: ${props => props.auto && "320px"};
    }

    @media only screen and (min-width: 1060px) and (max-width: 1300px)  {
        width: ${props => props.auto &&  "256px"};
        height: ${props => props.auto && "256px" };
    }

    @media only screen and (max-width: 1060px)  {
        width: ${props => props.auto &&  "192px"};
        height: ${props => props.auto && "192px" };
    }
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

    @media only screen and (min-width: 1600px){
        width: ${props => props.auto &&  "120px"};
        height: ${props => props.auto &&  "108px"};
        font-size: ${props => props.auto && "72px" };
        line-height: ${props => props.auto && "90px" };
    }

    @media only screen and (min-width: 1300px) and (max-width: 1600px){
        width: ${props => props.auto &&  "100px"};
        height: ${props => props.auto &&  "90px"};
        font-size: ${props => props.auto && "60px" };
        line-height: ${props => props.auto && "75px" };
    }

    @media only screen and (min-width: 1060px) and (max-width: 1300px) {
        width: ${props => props.auto &&  "80px"};
        height: ${props => props.auto &&  "72px"};
        font-size: ${props => props.auto && "48px" };
        line-height: ${props => props.auto && "60px" };
    }

    @media only screen and (max-width: 1060px) {
        width: ${props => props.auto &&  "60px"};
        height: ${props => props.auto &&  "54px"};
        font-size: ${props => props.auto && "36px" };
        line-height: ${props => props.auto && "45px" };
    }
`; 