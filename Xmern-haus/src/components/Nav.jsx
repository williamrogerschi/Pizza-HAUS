import { Link } from "react-router-dom"

const Nav = () => {

    let height

    return <div className="navbar">
        
        <Link to='/'>
        <img height='100px' width='100px' src='mern_logo_black.png' alt='pizza-logo'/>
        </Link>
        <Link to="/"> Home </Link>
        <Link to="/Pizza"> Pizzas </Link>
        <Link to="/CYOP"> CYOP </Link>

    </div>
}

export default Nav