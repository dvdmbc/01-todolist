import { ListContent } from './ListContent';
import styles from './List.module.css'
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';

const tasksFixed = [
    {
        id: uuidv4(),
        content: "Passear com os cachorros",
        isDone: false
    },
    {
        id: uuidv4(),
        content: "Lavar a louça",
        isDone: false
    },
    {
        id: uuidv4(),
        content: "Limpar a casa",
        isDone: true
    },
    {
        id: uuidv4(),
        content: "Estudar React",
        isDone: true
    },
]

export function List() {
    const [tasks, setTasks] = useState(tasksFixed)
    const [newTaskInputText, setNewTaskInputText] = useState('')

    // Adicionar uma nova tarefa - handleCreateNewTask, handleNewTaskInputChange
    function handleCreateNewTask(event) {
        event.preventDefault();
        const newTask = {
            id: uuidv4(),
            content: newTaskInputText,
            isDone: false
        };
        const newTasksArray = [...tasks, newTask];

        setTasks(newTasksArray)
        setNewTaskInputText('');
    }

    function handleNewTaskInputChange(event) {
        setNewTaskInputText(event.target.value)

    }


    // Marcar e desmarcar uma tarefa como concluída - markTaskAsDone

    function markTaskAsDone(taskId) {
        const tasksWithNewSelected = tasks.map((task) => {
            if (task.id === taskId) task.isDone = !task.isDone;
            return task;
        });
        setTasks(tasksWithNewSelected)
    }

    // Remover uma tarefa da listagem - deleteTask
    function deleteTask(taskId) {
        const newTasksWithoutDeletedOne = tasks.filter((task) => task.id != taskId);
        setTasks(newTasksWithoutDeletedOne)
    }

    return (
        <div className={styles.list}>
            <header className={styles.listHeader}>
                <form className={styles.form} onSubmit={handleCreateNewTask}>
                    <input
                        placeholder='Adicione uma nova tarefa'
                        type='text'
                        value={newTaskInputText}
                        required
                        id='newTaskInput'
                        className={styles.listNewTaskInput}
                        onChange={(event) => handleNewTaskInputChange(event)}


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
                onSelect={markTaskAsDone}

            >
            </ListContent>

        </div>
    );
};