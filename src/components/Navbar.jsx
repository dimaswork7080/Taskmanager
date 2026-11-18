import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar">
            <h2>Taskmanager</h2>
            <div>
                <Link to="/">Главная</Link>
                <Link to="/stats">Статистика</Link>
            </div>
        </nav>
    )
}

export default Navbar;