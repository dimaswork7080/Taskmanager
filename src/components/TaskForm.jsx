import { useState } from "react";

function TaskForm({ addTask }) {
    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() === '') return;
        addTask(title);
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Введите новую задачу"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <button type="submit">Добавить</button>
        </form>
    )
}

export default TaskForm;