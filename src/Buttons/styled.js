import styled from "styled-components";

export const ButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	padding: 20px;

    @media (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 0 20px 0;
}
`;

export const Button = styled.button`
	padding: 10px;
	color: ${({ theme }) => theme.colors.mainButtons};
	background: none;
	border: none;
	cursor: pointer;
	transition: color 0.5s;

    &:hover {
	color: ${({ theme }) => theme.colors.mainButtonsHover};
}

@media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
		padding: 0;
}

@media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
		font-size: 14px;
}

&:disabled {
	color: ${({ theme }) => theme.colors.disabledButton};
	cursor: not-allowed;
}

&:disabled:hover {
	color: ${({ theme }) => theme.colors.disabledButton};
}
`;