import { useState } from 'react'
import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"

function Home({ tasks, addTask, deleteTask, toggleTask }) {
    const [filter, setFilter] = useState('all');
    const filteredTasks = tasks.filter(task => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    })

    return (
        <main className="container">
            <h1>Мои задачи</h1>
            <TaskForm addTask={addTask} />
            <div className="filters">
                <button onClick={() => setFilter('all')}>Все</button>
                <button onClick={() => setFilter('active')}>Активные</button>
                <button onClick={() => setFilter('completed')}>Не активные</button>
            </div>
            <TaskList
                tasks={filteredTasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
            />
        </main>
    )
}

export default Home;