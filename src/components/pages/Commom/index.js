import React from 'react';
import { NavLink } from 'react-router-dom';

const Commom = (props) =>{
    return(
        <>
            <section className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>Grow your business with <strong>r_handoyo</strong></h1>
                                    <h2>We are the team of talent develovers making website</h2>
                                    <div>
                                        <NavLink className="btn btn-outline-primary" to="/contact">{props.btnname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                    <img className="img-fluid" width="100" src={props.imgsrc} alt=""/>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Commom;