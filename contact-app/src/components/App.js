import './App.css';
import React from 'react';
import Header from './Header';
import Addcontact from './AddContact';
import ContactList from './ContactList';
function App() {
  return (
    <div className='ui container'>
      <Header />
      <Addcontact/>
      <ContactList />
    </div>
  );
}

export default App;
