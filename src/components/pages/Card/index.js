import React from 'react';
import webImg from '../../assets/img/img3.jpg';

const Card = () =>{
    return(
        <>
            <div className="col-md-4 col-10 mx-auto mt-2">
                <div className="card" >
                    <img src={webImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
                                         
        </>
    )
}

export default Card;