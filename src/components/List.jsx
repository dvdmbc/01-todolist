import { ListContent } from './ListContent';
import styles from './List.module.css'
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';

const tasksFixed = [
    {
        id: 1,
        content: "Passear com os cachorros",
        isDone: false
    },
    {
        id: 2,
        content: "Lavar a louça",
        isDone: false
    },
    {
        id: 3,
        content: "Limpar a casa",
        isDone: true
    },
    {
        id: 4,
        content: "Estudar React",
        isDone: true
    },
]

export function List() {
    const [tasks, setTasks] = useState(tasksFixed)

    // Adicionar uma nova tarefa - createNewTask, handleNewTaskChange

    // Mostrar o progresso de conclusão das tarefas - doneTasks, setDoneTasks

    // Marcar e desmarcar uma tarefa como concluída - markTaskAsDone
    
    // function markTaskAsDone(taskId) {
    // }

    // Remover uma tarefa da listagem - deleteTask
    function deleteTask(taskId) {
        const newTasksWithoutDeletedOne = tasks.filter((task) => task.id != taskId);
        setTasks(newTasksWithoutDeletedOne)
    }

    return (
        <div className={styles.list}>
            <header className={styles.listHeader}>
                <form className={styles.form}>
                    <input
                        placeholder='Adicione uma nova tarefa'
                        className={styles.listNewTaskInput}
                    />
                    <button className={styles.listNewTaskButton}>
                        <span>Criar</span>
                        <PlusCircle size={18}></PlusCircle>
                    </button>
                </form>
            </header>
            <ListContent
                tasks={tasks}
                onDelete={deleteTask}
            >
            </ListContent>

        </div>
    );
};