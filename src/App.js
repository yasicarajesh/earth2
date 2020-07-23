import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import About from './components/about';
import Service from './components/service';
import Tophead from './components/tophead';
import Inter from './components/interwaste';
import House from './components/house';
import Com from './components/commer';
import Indus from './components/indus';
import School from './components/school';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Redirect
} from "react-router-dom";

class App extends React.Component{
  constructor(props)
  {
    super(props);
    document.addEventListener("scroll",function(){
      console.log(window.pageYoffset);
      var head= document.getElementsByTagName("header")[0];
      if(window.pageYOffset>50){
        head && (head.className="make-header");
      }
      else{
        head && (head.className=" ");
      }})
  }

  

  
  render(){
    return(
      <>
      
      
      <Router>
      <div>
       <Tophead/><Header/>
        <Route exact path="/login"><Login/></Route>
        <Route exact path="/"><Home/><Inter/></Route>
        <Route exact path="/about"><About/><Service/></Route>
        <Route exact path="/inter"><Inter/></Route>
        <Route exact path="/house"><House/></Route>
        <Route exact path="/commer"><Com/></Route>
        <Route exact path="/indus"><Indus/></Route>
        <Route exact path="/sch"><School/></Route>


        

        
       
        
      </div>
    </Router>


   </>
    );
  }
}


export default App;
