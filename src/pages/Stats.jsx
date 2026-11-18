function Stats({tasks}){
    const completed = tasks.filter(task => task.completed).length;
    const active = tasks.length - completed;

    return(
        <main className="container">
            <h1>Статистика</h1>
            <div className="stats">
                <div>
                    <h2>{tasks.length}</h2>
                    <p>Всего задач</p>
                </div>
                <div>
                    <h2>{active}</h2>
                    <p>Всего задач</p>
                </div>
                <div>
                    <h2>{completed}</h2>
                    <p>Всего задач</p>
                </div>
            </div>
        </main>
    )
}

export default Stats;