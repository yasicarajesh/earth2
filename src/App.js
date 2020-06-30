import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Service from './components/service';
// import Service from './components/service';
class App extends React.Component{
  render(){
    return(
      <>
      
      
      <Header/>
      <Home/>
      <About/>
      <Service/>
      


   </>
    );
  }
}


export default App;
