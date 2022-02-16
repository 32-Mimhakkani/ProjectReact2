import React from 'react';

const ContactDetails = (props) => {
    // const sasd = JSON.parse(localStorage.getItem('contacts'));
    console.log(props);
    return (
     
        <div className="container">
            <div className="row">
            <div className="card" style={{width:'500px'}}>
            <img className="card-img-top img-fluid" src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" alt="Card"  />
            <div className="card-body">
            <h5 className="card-title">Hakkani</h5>
            <p className="card-text">Email: Mim.cse32@gmail.com</p>
          
        </div>
      </div>
            </div>
        </div>
   
    );
};

export default ContactDetails;