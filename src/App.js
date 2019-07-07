import React from 'react';
import SmartphonesTable from './components/smartphones-table';
import data from './data/smartphones.json'
import './App.css';


class App extends React.Component {
  constructor (props){
    super(props)
    this.state ={
     data:data,
     term:'',
    }
    this.baseState = this.state

  }

  showAll = () => {
    this.setState(this.baseState)
  }

  searchName=(event)=>{
    event.preventDefault();
      const newData = {}
      if (this.state.term.trim() === ""){
        this.setState({
          data:newData,
        });
      return;
      }

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
        <div className ="top-container">   
          <form>
              <input 
              onChange={this.searchHandler} type="text" placeholder ="Find your smartphones "
                      value ={this.state.term} /> 
            <button className= "btn btn1" 
              onClick={this.searchName}
              type= "button">Search</button>
          </form>
          <div className="showall">
            <p>Smartphon  Lists</p>
            <button className= "btn btn2"
                  onClick={this.showAll} 
                  type="button">Show All</button>
          </div>

          
        </div>
       { Object.keys(this.state.data).length
         ?<SmartphonesTable  data={this.state.data}/>
          :<div className ="not-found">not found</div>
       }
      </div>
    );
  }
}

export default App
