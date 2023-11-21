import styled from "styled-components";

export const Title = styled.h1`
    font-weight: 900;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 26px;
    }
`;