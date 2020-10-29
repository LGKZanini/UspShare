import styled from 'styled-components';
import VoteButton from '../../img/button/upVoteButton.png';
import SendButtonImg from '../../img/button/sendButton.png';

export const CommentDiv = styled.div`
    display: flex;
    padding-left: ${ props => props.isSubComment ? "80px" : "0px" };
    background: #FFFFFF;
`;

export const ButtonTop = styled.button`
    display: block;
    width: 12px;
    height: 20px;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline:none;

    background-color: Transparent;
    background-image: url(${ () => VoteButton });
    background-repeat: no-repeat;
    transform: ${ props => props.isTop ? "rotate(180deg)" : "rotate(0deg)"};
`;

export const VoteText = styled.span`
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    
    color: #1094AB;
`;

export const ImageDiv = styled.div`
    display: flex;
    width: 96px;
`;

export const TextDiv = styled.div`
    margin-left: 20px;
`;

export const TextUserName = styled.span`
    display: block;

    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    color: #505252;
`;

export const TextMain = styled.span`
    display: block;
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #505252;
`;

export const PerfilImageDiv = styled.div`
    margin-right: 15px;
`;

export const SendButton = styled.button`
    display: block;
    width: 64px;
    height: 48px;

    background-color: #FDAF2D;
    background-image: url(${ () => SendButtonImg });
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline:none;

    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12);
`;

export const CommentInput = styled.textarea`
    height: auto;
    width: 100%;
    padding: 5px;
    overflow: hidden;
    outline:none;

    margin-right: 10px;
    display: block;
    background: #FFFFFF;
    border: 1px solid #FDAF2D;
    box-sizing: border-box;
    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.2), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 8px 38px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
`;

export const InputDiv = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const CommentSectionDiv = styled.div`
    padding-left: ${ props => props.isSubComment ? "80px" : "0px" };
`;