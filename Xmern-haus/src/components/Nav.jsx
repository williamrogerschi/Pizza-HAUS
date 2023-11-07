import { Link } from "react-router-dom"

const Nav = () => {

    let height

    return <div className="navbar">
        
        <Link className="nav-a" to='/'>
        <img height='100px' width='100px' src='mern_logo_black.png' alt='pizza-logo'/>
        </Link>
        <Link className="nav-a" to="/"> Home </Link>
        <Link className="nav-a" to="/Pizza"> Pizzas </Link>
        <Link className="nav-a" to="/CYOP"> CYOP </Link>

    </div>
}

export default Nav