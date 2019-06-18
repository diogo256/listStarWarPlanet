import React, { Component } from 'react';
import './App.css';

import SearchBar from './componentes/searchBar'
import VideoList from './componentes/VideoList';
import VideoPlayer from './componentes/VideoPlayer';
import { Provider } from "react-redux";
import store from './store';

// function App() {
class App extends Component{  
  render(){
    return (
      <Provider store={store}>
        <div className="container">
          <SearchBar />
          <VideoList />
          <VideoPlayer />
        </div>
      </Provider>
    );
  }
}

export default App;
