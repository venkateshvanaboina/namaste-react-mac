import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [loginbtn, setLoginbtn] = useState("login");
    //console.log("header component render")

    useEffect(() => {
        
    },[loginbtn])
   
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link >Home</Link>
                    </li>
                    <li>
                        <Link to={"/aboutus"}>About Us</Link>
                    </li>
                    <li>
                       <Link to="/contactus">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                      loginbtn === "login" ? setLoginbtn("logout"): setLoginbtn("login");
                    }}>{loginbtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;