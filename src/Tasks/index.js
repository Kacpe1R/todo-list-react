import { List, Item, Content, Button, Icon } from "./styled";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map((task) => (
            <Item key={task.id} hidden={task.done && hideDone}>
                <Button $toggleDone onClick={() => toggleTaskDone(task.id)}>
                    <Icon icon={faCheck} $undone={!task.done} />
                </Button>
                <Content $done={task.done}>{task.content}</Content>
                <Button $remove onClick={() => removeTask(task.id)}>
                    <Icon icon={faTrashCan} />
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;