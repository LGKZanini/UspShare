import styled from 'styled-components';
import BackGround from '../../img/background/background.png';

export const BodyContainer = styled.body`
    width:100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: url(${ () => BackGround });
    background-repeat: no-repeat;
`;