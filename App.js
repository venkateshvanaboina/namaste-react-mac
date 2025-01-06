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

const Cards = () => {
    return (
        <div className="cards">
            <h3>Merdian Restaurant</h3>
           

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
            <Cards />

            </div>


        </div>
    )
}

const Applayout = () => {
    return <div className="app">
       <Header />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("myapp"));

root.render(<Applayout />);