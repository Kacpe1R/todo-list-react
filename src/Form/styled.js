import styled from "styled-components";

export const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 1fr 120px;
	grid-gap: 20px;
	padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
		grid-template-columns: 1fr;
	}
`;

export const Input = styled.input`
	padding: 10px;
	border: 1px solid #ddd;
`;

export const Button = styled.button`
	padding: 10px;
	background-color: teal;
	color: ${({ theme }) => theme.colors.lightTheme};
	border: none;
	cursor: pointer;
	transition: background-color .5s, transform .5s;

    &:hover {
	background-color: ${({ theme }) => theme.colors.mainButtonsHover};
	transform: scale(1.1);

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
		transform: scale(1.04);
	}
}
`;