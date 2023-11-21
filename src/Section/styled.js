import styled from 'styled-components';

export const StyledSection = styled.section`
	margin: 20px 0;
	background-color: ${({ theme }) => theme.colors.lightTheme};
	box-shadow: 0 0 7px ${({ theme }) => theme.colors.disabledButton};
`;

export const Header = styled.header`
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        grid-template-columns: 1fr;   
    }
`;

export const Title = styled.h2`
	margin: 0;
	padding: 20px;
	font-weight: 900;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
		font-size: 20px;
}
`;

export const SectionBody = styled.div`
	min-height: 40px;
	border-top: 2px solid #ddd;
`;