import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { Container } from "react-bootstrap";
import Layout from "./layouts/Layout";

function App(){
  return (
    <div className='container'>
      <Layout>
      <Route basename={process.env.PUBLIC_UR }/>
    </Layout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
        <Route basename={process.env.PUBLIC_UR }/>
      </Switch>
    
    </div>
  );
};




export default App;

