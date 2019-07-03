import React, {Component} from 'react';
import './App.css';
import ListaPlanet from './Component/ListaPlanet';


class App extends Component{

  constructor(props){
    super()
    this.state={
      title: 'simple'
    }
  }

  render(){
    return (
      <div className="App">
        <ListaPlanet />
      </div>
    )
  }
}

export default App;
