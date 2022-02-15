import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({info}) => {
    return (
        <div className='container'>
            <table className="table">
  <thead>
    <tr className='bg-dark text-white'>
      <th>Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
{
    info?.map(clist=>
        <ContactCard key={clist.id}  clist={clist} />
    )
}
       
    
  </tbody>
</table>
        </div>
    );
};

export default ContactList;