
import './App.css';

import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

 
 export  class App extends Component {
   render() {
     return (
       <div>
        <Router>
         <Navbar/>
         <Routes>
          <Route path="/" element={< News  key='general' pageSize={8} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News key='business'  pageSize={8} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News key='entertainment'  pageSize={8} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News key='general'  pageSize={8} country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News key='health'  pageSize={8} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News key='science'  pageSize={8} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News key='sports'  pageSize={8} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News  key='technology}>' pageSize={8} country="in" category="technology"/>}></Route>

        </Routes>
         </Router>
       </div>
     )
   }
 }
 export default App;

