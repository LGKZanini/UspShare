import styled, { keyframes } from 'styled-components';
import BackGround from '../../img/icons/searchBarIcon.png';

export const SearchBarInput = styled.input`
    display: block;
    height: 40px;
    width: 60%;
    margin: 0 auto;

    border-style: solid;
    border-width: ${props => props.search ? "0.75px 0.75px 0px 0.75px" : "0.75px"};
    border-color: #FDAF2D;

    outline: none;
    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12);
    border-radius: ${props => props.search ? "16px 16px 0 0" : "16px"};
    padding: 0 48px 0 32px;

    background-image: url(${ () => BackGround });
    background-position: 98% 50%;
    background-repeat: no-repeat;
`;

export const SearchBarDiv = styled.div`
    width: 100%;
    justify-content: space-between;
`;

export const SearchBarResult = styled.div`
    height: 80px;
    width: 60%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0 48px 10px 32px;

    background-color: #ffffff;
    border-style: solid;
    border-width: ${props => props.search ? "0px 0.75px 0.75px 0.75px" : "0.75px"};
    border-radius: ${props => props.search ? "0px 0px 16px 16px" : "16px"};
    border-color: #FDAF2D;
`;

export const SearchBarNav = styled.nav`
    height: 80px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SearchBarLoad = styled.div`
    margin: auto;
    
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: ${rotate} 2s linear infinite;
`;

export const SearchBarUl = styled.div`
  margin: 0;
`;

export const SearchBarLi = styled.li`
  list-style-type: none;
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;

  color: #000000;
`;