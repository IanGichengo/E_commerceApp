import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li> onClick={()=>{setMenu("shop")}}<link to='/'>Shop</link>{menu==="shop"?<h/>:<></>}</li>
                <li> onClick={()=>{setMenu("mens")}}<link to='/mens'>Men</link>{menu==="mens"?<h/>:<></>}</li>
                <li> onClick={()=>{setMenu("womens")}}<link to="womens">Women</link>{menu==="womens"?<h/>:<></>}</li>
                <li> onClick={()=>{setMenu("kids")}}<link to='/kids'>Kids</link>{menu==="kids"?<h/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <link to='/login'><button>Login</button></link>
                <link to='/cart'><img src={cart_icon} alt="" /></link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar