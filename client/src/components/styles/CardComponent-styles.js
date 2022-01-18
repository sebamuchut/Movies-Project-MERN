import styled from 'styled-components';

export const MainCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 12rem;
    heigth: 25rem;
    margin: 0 1rem 1rem 1rem;
    cursor: pointer;
    padding: 1rem;
    &:hover {
        transform: scale(1.02); 
        box-shadow: 0px 4px 8px 1px gray;
    }
`;

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleStyle = styled.p`
    font-size: 14px;
    font-weight: 700;
    margin-block: 3px;
    text-align: center;
`;

export const TextStyle = styled.p`
    font-size: 12px;
    margin-block: 2px
`;