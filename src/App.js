
import React from 'react';
import SmartphonesTable from './components/smartphones-table/index';
import data from './data/smartphones.json'
import './App.css';


class App extends React.Component {
  constructor (props){
    super(props)
    this.state ={
     data:data,
     term:'',
    }

  }

  searchName=(event)=>{
    event.preventDefault();
      const newData = {}
      for (var key in data) {
        if(data[key].name.id.toLowerCase().includes(this.state.term.toLowerCase())){
           newData[key]=data[key]
        }
      }

      this.setState({
        data:newData,
      })
  }

  searchHandler=(event) =>{
    this.setState({term:event.target.value})
  }
  
  render(){
    return (
      <div className="container">
        <h2>Smartphones lists</h2>
        
        <form>
            <input type="text"
                    onChange={this.searchHandler}
                    value ={this.state.term}

            /> 
            <button onClick={this.searchName}>Click</button>
        </form>
       <SmartphonesTable  data={this.state.data}/>
      </div>
    );
  }
}

export default App
