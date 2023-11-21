import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <ButtonsContainer>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>
                    {hideDone ? "Pokaz" : "ukryj"} ukonczone
                </Button>
                <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
                    Ukoncz wszystkie
                </Button>
            </>
        )}
    </ButtonsContainer>
);

export default Buttons;