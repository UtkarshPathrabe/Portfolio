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

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
    @media ${props => props.theme.breakpoints.md}{
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`;