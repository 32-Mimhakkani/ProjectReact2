import React from 'react';

const ContactCard = (props) => {
    const {id,name,email}=props.clist


    const handledelete = (id)=>{
          


    }

    return (
        <>
        <tr>
            <td>{id}</td>
            <td><i className="fa-solid fa-user me-2"></i> {name}</td>
            <td>{email}</td>
            <td>
                <i className="fa-solid fa-pen-to-square text-success ms-3"></i>
                <i className="fa-solid fa-trash-can text-danger ms-3" ></i>
            </td>
       </tr>

       
        </>
    );
};

export default ContactCard;