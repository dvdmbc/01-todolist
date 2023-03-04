import styles from './ListContent.module.css';
import { ListItem } from './ListItem';

export function ListContent({ tasks, onDelete }) {

    const createdTasksCount = tasks.length
    const doneTasksCount = tasks.filter((task) => task.isDone === true).length;
    // console.log(tasks.filter((task) => task.isDone === true))

    function deleteTaskItem(taskIdFromListItem) {
        onDelete(taskIdFromListItem)
    }
    return (
        <div className={styles.listContent}>

            <header className={styles.listContentHeader}>
                <div className={styles.listCreatedTaskCounter}>
                    Tarefas Criadas
                    <span>{createdTasksCount}</span>
                </div>
                <div className={styles.listDoneTaskCounter}>
                    Tarefas Concluídas
                    <span>{doneTasksCount} de {tasks.length}</span>
                </div>

            </header>
            <main className={styles.listItensContainer}>

                {tasks.map(({ id, content, isDone }) => {
                    return (
                        <ListItem
                            key={id}
                            taskId={id}
                            taskContent={content}
                            taskIsDone={isDone}
                            onDelete={deleteTaskItem}
                        >
                        </ListItem>
                    )
                })}

            </main>
        </div>
    );
};