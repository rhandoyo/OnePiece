import React, { useState } from 'react';

const Contact = () =>{

    const [data, setData] = useState({
        fullname : "",
        phone: "",
        email: "",
        msg: ""
    })

    const inputEvent = (event) =>{
         const {name,value} = event.target

         setData((preVal)=>{
             return{
                 ...preVal,
                 [name]: value
             }
         })
        };

    const handleSubmit = () =>{
        console.log(data.fullname)
    }

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input name="fullname" value={data.fullname} onChange={inputEvent} type="input" class="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input name="phone" value={data.phone} onChange={inputEvent} type="input" class="form-control" id="exampleFormControlInput1" placeholder="mobile n    umber"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input name="email" value={data.email} onChange={inputEvent} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea name="msg" value={data.msg} onChange={inputEvent} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button onClick={handleSubmit} className="btn btn-outline-primary">Submit form</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;