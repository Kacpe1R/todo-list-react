import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const List = styled.ul`
	padding: 0 20px 20px 20px;
	list-style: none;
`;

export const Item = styled.li`
	display: grid;
	grid-template-columns: 35px 1fr 35px;
	padding: 10px;
	border-bottom: 1px solid #ddd;

	${({ hidden }) =>
		hidden &&
		css`
			display: none;
		`}
`;

export const Content = styled.span`
	display: grid;
	align-items: center;
	margin: 0 10px;

	${({ $done }) => $done && css`
			text-decoration: line-through;
		`}
`;

export const Button = styled.button`
	padding: 7px 10px;
	border: none;
	cursor: pointer;
	transition: background-color 0.5s;

	${({ $toggleDone }) => $toggleDone && css`
			background-color: ${({ theme }) => theme.colors.taskDoneButton};

			&:hover {
				background-color: ${({ theme }) => theme.colors.taskDoneButtonHover};
			}
		`}

	${({ $remove }) => $remove && css`
			background-color: ${({ theme }) => theme.colors.deleteTaskButton};

			&:hover {
				background-color: ${({ theme }) => theme.colors.deleteTaskButtonHover};
			}
		`}
`;

export const Icon = styled(FontAwesomeIcon)`
	color: ${({ theme }) => theme.colors.lightTheme};

	${({ $undone }) => $undone && css`
			visibility: hidden;
		`}
`;