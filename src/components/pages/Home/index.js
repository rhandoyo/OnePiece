import React from 'react';
import './Home.css';
import Gambar from '../../assets/img/one2.jpg'
import { NavLink } from 'react-router-dom';
import Commom from '../Commom';

const Home = () =>{
    return(
        <>
        <Commom name = "Home"
            imgsrc = {Gambar}
            visit = "/contact"
            btnname = "Get Started"  
        />
        </>
    )
}

export default Home;