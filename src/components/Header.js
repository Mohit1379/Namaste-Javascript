import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
const Header=()=>{

    const [toogleButton, setToogleButton] = useState("Login")

    return(
        <div className='header'>
            <div className='logo'>
                <img src={ LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Cart
                    </li>
                    <li>
                        <button className="button" onClick={()=>{
                        toogleButton==="Login" ? setToogleButton("Logout") : setToogleButton("Login")
                        }}>{toogleButton}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;