import logo from './logo.svg';
import './App.css';
import AddContact from './Component/AddContact';
import Header from './Component/Header';
import ContactList from './Component/ContactList';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ContactCard from './Component/ContactCard';
import About from './Component/About';
import ContactDetails from './Component/ContactDetails';

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


  //for localstorage setitems
  useEffect(()=>{
    if(info?.length){localStorage.setItem('contacts',JSON.stringify(info))}
  },[info])


    //get localstorage data
    useEffect(()=>{
      const getinfoall = JSON.parse(localStorage.getItem('contacts')) 
  
     if(getinfoall?.length) setInfo(getinfoall)
   },[])


 const deletehandler =(id)=>{

  const remove = info.filter(del=>{
    return del.id!==id
  });

  setInfo(remove);
 
 }
  
  return (
    <div className="App">
     
       
       
       <BrowserRouter>
           <Header />
           <Routes>
              <Route path="/" element={<ContactList info={info}/>} />
              <Route path="/addcontact" element={<AddContact info={info} setInfo={setInfo} />} />
              <Route path='/contactlist' element={<ContactList info={info}/>} />
              <Route path='/contact/:id' element={<ContactDetails/>} />
              <Route path='/about' element={<About/>} />
             
          </Routes>
       </BrowserRouter>
   
    </div>
  );
}

export default App;
