import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        Configuración
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    camilo@gmail.com
                </li>
                <li>
                    <NavLink to='/'>
                        Stores
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar