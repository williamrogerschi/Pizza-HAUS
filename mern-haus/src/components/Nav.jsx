import { Link } from "react-router-dom"

const Nav = () => {

    return <div className="navbar">
        <Link to="/"> Home </Link>
        <Link to="/Pizza"> Pizzas </Link>
        <Link to="/CYOP"> CYOP </Link>

    </div>
}

export default Nav