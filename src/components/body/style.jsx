import styled from 'styled-components';
import BackGround from '../../img/background/background.png';

export const BodyContainer = styled.body`
    width:100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-image: url(${ () => BackGround });
    background-repeat: no-repeat;
    box-shadow: inset  0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12);;

`;