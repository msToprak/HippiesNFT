import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button> 
                    <a className="navbar-brand logo" href="#mainPage">
                        <img src="images/LOGO.jpg" width="auto" height="40" />
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-left">
                        <li><a href="#roadMap">ROADMAP</a></li>
                        <li><a href="#FAQ">FAQ</a></li>
                        <li><a href="#features">FEATURES</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><span className=" logo-small">
                           <a className="navbar-brand" href="#instagram">
                               <img src="images/instagram.jpg" width="auto" height="20" />
                           </a>
                        </span></li>
                        <li><span className=" logo-small">
                           <a className="navbar-brand" href="#instagram">
                               <img src="images/instagram.jpg" width="auto" height="20" />
                           </a>
                        </span></li>
                        <li><span className=" logo-small">
                           <a className="navbar-brand" href="#instagram">
                               <img src="images/instagram.jpg" width="auto" height="20" />
                           </a>
                        </span></li>
                        <li><span className=" logo-small">
                           <a className="navbar-brand" href="#instagram">
                               <img src="images/instagram.jpg" width="auto" height="20" />
                           </a>
                        </span></li>
                        {/* <li> <span className=" logo-small">
                           <a className="navbar-brand" href="#instagram">
                           <button className="button">MINT</button>      
                           </a>
                        </span></li>  */}
                        <li><a href="#contact">MINT</a></li>
                    </ul>                  
                </div>
            </div>
        </nav>
    );
};

export default Navbar;