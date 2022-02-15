import logo from './logo.svg';
import './App.css';
import AddContact from './Component/AddContact';
import Header from './Component/Header';
import ContactList from './Component/ContactList';
import { useState } from 'react';

const contactlists =[
  {
    id :100,
    name:'hakknai',
    email:'mim.cse42@gmail.com',

  },
  {
    id :101,
    name:'Munna',
    email:'munna.cse43@gmail.com',
    
  },
  {
    id :103,
    name:'Suvo',
    email:'suvo.cse32s@gmail.com',
    
  },  {
    id :104,
    name:'Najmul',
    email:'najmul.cse3ere2@gmail.com',
    
  },  {
    id :105,
    name:'Rafiq',
    email:'rafaq.cse332@gmail.com',
    
  }
]

function App() {
  const [info,setInfo] =useState([])

  return (
    <div className="App">
       <Header />
       <AddContact info={info} setInfo={setInfo} />
       <ContactList info={info}/>
       
    </div>
  );
}

export default App;
