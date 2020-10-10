import React, { useState } from 'react';
// import gambar from '../../assets/logo/logokubaru.png';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () =>{

    return(
        <>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-10 mx-auto">    
                    <nav className="navbar navbar-expand-lg navbar-default bg-default">
                        <a className="navbar-brand" href="#">
                            Navbar
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"> 
                                    <NavLink activeClassName="menu-active" exact className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu-active" exact  className="nav-link" to="/service">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu-active" exact  className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu-active" exact  className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;