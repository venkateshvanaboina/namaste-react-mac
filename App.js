import React from "react";
import ReactDOM from "react-dom/client";

    const Header = () => { 
    return (
         <div className="header">
                <div className="logo-container">
                 <img className="logo" src="https://img.freepik.com/premium-vector/beautiful-unique-logo-design-food-restaurant-company_1287271-53813.jpg"></img>
             </div>
             <div className="nav-items">
                    <ul>
                       <li>Home</li>
                        <li>About Us</li>
                       <li>Contact US</li>
                      <li>Cart</li>
                   </ul>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="copy-right">
                <h3 className="copy right">Copy right logo</h3>
            </div>
            <div className="nav-links">
                <a>About US</a>
                <a>Home</a>
                <a>Contact US</a>
                <a>Address</a>
                <a>Email US</a>
            </div>
            <div className="address">
                <h2>Office Address</h2>
                <p>
                    L v Nagar , street number- 6,
                    Old Gajuwaka,
                    Visakhapatnam,
                    530026
                </p>
            </div>
        </div>
    )
}

const Cards = () => {
    return (
        <div className="cards">
            <img className="image-1" alt="image1" src="https://b.zmtcdn.com/data/pictures/7/91727/3fa5d44b6504b1c30df33efc442ffe3a_featured_v2.jpg"></img>
            <h4>Merdian Restaurant</h4>
            <h4>Hotel</h4>
            <h4>4.4 stars</h4>
            <h4>38min</h4>
            
        </div>
    )
}

const Body = () => {
    return (
        <div className="body" >
            <div className="searchbar">
                SearchBar
            </div>
            <div className="card-container">
            <Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards />

            </div>


        </div>
    )
}

const Applayout = () => {
    return <div className="app">
       <Header />
        <Body />
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("myapp"));

root.render(<Applayout />);