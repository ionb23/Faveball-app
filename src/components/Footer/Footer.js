import './Footer.css';
import {NavLink} from 'react-router-dom'

function Footer() {
    return (
        <footer className="py-3">
            <ul className="nav justify-content-center border-bottom pb-3">
                <li className="nav-item"><NavLink to="/home" className="px-2 mx-5 text-color-warning">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/live" className="px-2 mx-5 text-color-warning">Live</NavLink></li>
                <li className="nav-item"><NavLink to="/saved" className="px-2 mx-5 text-color-warning">Comparison</NavLink></li>
            </ul>
            <p className="text-center text-color-warning">© 2023 FaveBall, Inc.</p>
        </footer>
    )
}

export default Footer