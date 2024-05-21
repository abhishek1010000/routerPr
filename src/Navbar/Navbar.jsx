import './Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = ()=>{
    return (
        <nav>
            <div className="logo">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                <h2>GeekFoods</h2>
            </div>
            <ul>
                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/quote"><li>Quote</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/restaurants"><li>Restaurants</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/foods"><li>Foods</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/contact"><li>Contact</li></NavLink>
            </ul>
            <div className="btn">
                <button>Get started</button>
            </div>
        </nav>
    )
}

export default Navbar;