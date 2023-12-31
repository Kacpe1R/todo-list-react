import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
	const [newTaskContent, setNewTaskContent] = useState("");

	const inputRef = useRef(null);
	const focusInput = () => {
		inputRef.current.focus();
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		const trimNewTaskContent = newTaskContent.trim();

		if (trimNewTaskContent !== "") {
			addNewTask(newTaskContent.trim());
		}
		setNewTaskContent("");
	};
	return (
		<StyledForm onSubmit={onFormSubmit}>
			<Input
				ref={inputRef}
				value={newTaskContent}
				placeholder="Co jest do zrobienia?"
				onChange={({ target }) => setNewTaskContent(target.value)}
			/>
			<Button onClick={focusInput}>Dodaj zadanie</Button>
		</StyledForm>
	);
};

export default Form;