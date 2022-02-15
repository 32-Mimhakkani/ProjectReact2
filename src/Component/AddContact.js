import React from 'react';

const AddContact = () => {
    return (
        <div className='container p-3 border border-muted'>
        <form>

            <div className="mb-3">
                    <label htmlFor="myname" className="form-label">Name</label>
                    <input type="text" className="form-control" id="myname"/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>

                <button type="submit" className="btn btn-primary">Add New</button>
         </form>
         </div>
    );
};

export default AddContact;