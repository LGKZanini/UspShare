import styled from 'styled-components';

import TrashButton from '../../img/icons/trashIcon.png';


export const TrashButtonLabel = styled.div`
    width: 36px;
    height: 36px;

    border: none;
    cursor: pointer;
    overflow: hidden;
    outline:none;

    background-color: Transparent;
    background-image: url(${ () => TrashButton });
    background-repeat: no-repeat;
`;


export const LabelButtonText = styled.div`
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;

    align-items: center;
    text-align: center;

    color: #000000;
`;

export const LabelButtonDiv = styled.div`
    height: 40px;
    margin: 2.4px 2px;
    display: flex;
    justify-content: space-between;
    padding: 8px;

    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
`
