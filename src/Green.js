import React, { Component, state } from 'react';
import ReactDOM from 'react-dom';
import './App';

class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      image: ""
    }
  }


  boxClick = (e) => {
    this.setState({
      image: "green.png"
    })
  }


 
    
  render()
  {
      return(
        <div className="green">
            </div>
        );
  } 

   
      
            
}


export default App;