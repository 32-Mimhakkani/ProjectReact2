import logo from './logo.svg';
import './App.css';
import AddContact from './Component/AddContact';
import Header from './Component/Header';
import ContactList from './Component/ContactList';

function App() {
  return (
    <div className="App">
       <Header />
       <AddContact />
       <ContactList />
       
    </div>
  );
}

export default App;
