import styled from 'styled-components';

export const CommentsSection = styled.div`
    padding: 0 12% 0 12%;
    background: #FFFFFF;
    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
`;

export const HrSection = styled.hr`
    border: none;
    height: 0.25px;
    background-color: #64C4D2;
`;

export const LoadMoreButton = styled.button`
    display: block;
    width: 160px;
    height: 24px;
    
    background: #FDAF2D;
    border-radius: 12px;
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline:none;

    color: #FFFFFF;
    
    &:hover{
        background: #E99100;
    }
`;

export const LoadMoreButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;