import React from "react";
import Typed from "react-typed"

const Header = () => {
    return ( 
        <div className="header-wrapper">
            <div className="header-info">
                <h1>Full Stack Developper</h1>
                <Typed 
                className="typed-text"
                strings={["Flutter","Laravel","React","Python"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
     );
}
 
export default Header;