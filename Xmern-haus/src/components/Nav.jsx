import { Link } from "react-router-dom"

const Nav = () => {

    let height

    return <div className="navbar">
        
        <img height='120px' width='120px' src='mern_logo_black.png' alt='pizza-logo'/>
        <Link to="/"> Home </Link>
        <Link to="/Pizza"> Pizzas </Link>
        <Link to="/CYOP"> CYOP </Link>

    </div>
}

export default Nav