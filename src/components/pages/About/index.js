import React from 'react';
import Commom from '../Commom';
import Gambar from '../../assets/img/about.jpeg';

const About = () =>{
    return(
        <>
            < Commom 
                name = "About"
                visit = "/contact"
                imgsrc = {Gambar}
                btnname = "Contact here"
            />
        </>
    )
}



export default About;