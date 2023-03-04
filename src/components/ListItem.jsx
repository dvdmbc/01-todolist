import { Check, Trash } from "phosphor-react";
import styles from './ListItem.module.css';

export function ListItem({ taskId, taskContent, taskIsDone, onDelete, onSelect }) {
    // console.log(taskId)
    function handleDeleteTask() {
        onDelete(taskId);
    };

    function handleSelectTask() {
        onSelect(taskId)
    };

    return (
        <div className={styles.listItem}>

            <button
                className={taskIsDone ? styles.listItemToggleSelected : styles.listItemToggle}
                onClick={handleSelectTask}
            >
                {taskIsDone ? <Check size={24}></Check> : null}
            </button>

            <p className={taskIsDone ? styles.listItemTextSelected : styles.listItemText}>{taskContent}</p>

            <button className={styles.listItemDeleteButton} onClick={handleDeleteTask} title="Deletar tarefa">
                <Trash size={24}  ></Trash>
            </button>

        </div>
    );
};