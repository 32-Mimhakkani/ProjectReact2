import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


const AddContact = (props) => {

    const nameref = useRef();
    const emailref = useRef();
    const passref = useRef();
    
   
const handleSubmit =e=>{
    e.preventDefault();

    if(nameref.current.value ===''){
        alert('please enter the name')
    }
    else if(emailref.current.value===''){
        alert('please enter the Email')
    }
    else if(passref.current.value===''){
        alert('please enter the id')
    }
    else{
        const objj ={
            name:nameref.current.value,
            email:emailref.current.value,
            id :passref.current.value
        }
        props.setInfo([objj,...props.info])
       
        nameref.current.value = " ";
        emailref.current.value = " ";
        passref.current.value = " ";
    }
        


}



    return (
        <div className='container p-3 border border-muted'>
        <form onSubmit={handleSubmit}>

              <div className="mb-3">
                    <label htmlFor="myname" className="form-label">Name</label>
                    <input type="text" ref ={nameref} className="form-control" id="myname"/>
                </div>

                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" ref ={emailref} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                </div>

                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                 <input type="password" ref ={passref} className="form-control" id="exampleInputPassword1"/>
                </div>
                
                <Link to="/contactlist">
                  <button type="submit" className="btn btn-primary">Add New</button>
                </Link>
               
         </form>
         </div>
    );
};

export default AddContact;