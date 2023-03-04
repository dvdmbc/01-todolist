import styles from './ListContent.module.css';
import { ListItem } from './ListItem';

export function ListContent({ tasks, onDelete, onSelect }) {
    // Calcular o total de tarefas
    const createdTasksCount = tasks.length
    // Mostrar o progresso de conclusão das tarefas - doneTasks
    const doneTasksCount = tasks.filter((task) => task.isDone === true).length;
    
    function deleteTaskItem(taskIdFromListItem) {
        onDelete(taskIdFromListItem);
    };

    function selectTaskItem(taskIdFromListItem) {
        onSelect(taskIdFromListItem);
    };

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
                            onSelect={selectTaskItem}
                        >
                        </ListItem>
                    )
                })}

            </main>
        </div>
    );
};