import logo from "../images/logo.png"
import { Link, NavLink } from "react-router-dom"
import ProfileImg from "../images/profile.png"

export default function Header() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline"
    }
    return (
        <nav className="nav-items">
            <img src={logo} alt="Shirt Store Logo" className="nav-logo"/>
            <Link to="/" className="nav-text">Kev's Shirt Shop</Link>
            <div className="nav-links">
                <NavLink 
                    to="/t-shirts"
                    style={({ isActive }) => isActive ? activeStyle : null }
                >
                    Shop Shirts
                </NavLink>
                <NavLink 
                    to="/sign-up"
                    style={({ isActive }) => isActive ? activeStyle : null }
                >
                    Sign-Up
                </NavLink>
                <Link 
                    to="/user-profile"         className="nav-links-img-container"
                >
                    <img src={ProfileImg} className="nav-links-img"/>
                </Link> 
            </div> 
        </nav>
    )
}