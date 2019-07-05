import React from 'react';
import SmartphonesTable from './components/smartphones-table';
import data from './data/smartphones.json'
import './App.css';

function App() {
  return (
    <div className="container">
      <h2>Smartphones lists</h2>
     <SmartphonesTable data = {data}/>
    </div>
  );
}

export default App;
