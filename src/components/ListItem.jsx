import { Check, Trash } from "phosphor-react";
import styles from './ListItem.module.css';

export function ListItem({ taskId, taskContent, taskIsDone, onDelete }) {
// console.log(taskId)
    function handleDeleteTask() {
        onDelete(taskId);
    }

    return (
            <div className={styles.listItem}>

                <button className={ taskIsDone ? styles.listItemToggleSelected : styles.listItemToggle }>
                    { taskIsDone ? <Check size={24}></Check> : null }
                </button>

                <p className={ taskIsDone ? styles.listItemTextSelected : styles.listItemText }>{taskId} {taskContent}</p>

                <button className={styles.listItemDeleteButton} onClick={handleDeleteTask} title="Deletar tarefa">
                    <Trash size={24}  ></Trash>
                </button>

            </div>        
    );
};