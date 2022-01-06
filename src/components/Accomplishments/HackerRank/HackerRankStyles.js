import styled from "styled-components";

export const TitleLink = styled.a`
    color: hsl(204,23.8%,95.9%);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 15rem;
    margin: 24px 0 40px;
    @media ${props => props.theme.breakpoints.md}{
        margin: 20px 0 32px;
    }
    @media ${props => props.theme.breakpoints.sm}{
        margin: 24px auto;
    }
`;

export const ErrorContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ChartContainer = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    margin: 2rem auto;
`;

export const ScoreParentContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8rem;
    row-gap: 1rem;
    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
        flex-direction: column;
    }
`;

export const ScoreContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ScoreTitle = styled.h4`
    font-size: 26px;
    line-height: 40px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
    padding-bottom: 1rem;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 22px;
        line-height: 32px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 18px;
        line-height: 24px;
    }
`;

export const ScoreText = styled.p`
    font-size: 24px;
    line-height: 40px;
    font-weight: 200;
    color: rgba(255, 255, 255, 0.5);

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 20px;
        line-height: 32px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
    }
`;