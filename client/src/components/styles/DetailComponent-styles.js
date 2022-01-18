import styled from "styled-components";

export const MainDetailDiv = styled.div`
    background-color: #F1F3F4;
    justify-content: center;
    height: 100vh;
`;

export const DetailDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: white;
    border-bottom: 5px solid #E2B616;
    border-left: 5px solid #E2B616;
    margin-left: 4rem;
    margin-right: 4rem;
    max-height: 100vh
`;

export const AllTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 1rem;
`;

export const Text = styled.p`
    margin-block: 2px;
    font-size: 14px
`;
export const TextPlot = styled.h4`
    font-style: italic;
`;

export const Button = styled.button`
    font-weight: 800;
    color: #E6461A;
    font-size: 30px;
    margin-left: 1rem;
    margin-block: 0.5rem;
    cursor: pointer;
    border: none
`;

export const MovieTitle = styled.h1`
    margin: 0;
`;

export const TitlePlotDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem 0 2rem;
`;