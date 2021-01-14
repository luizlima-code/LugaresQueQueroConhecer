import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Headers/Header';
import SearchArea from './Headers/SearchArea';
import ContainerCard from './container/ContainerCard';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SearchArea />
    <ContainerCard />
  </React.StrictMode>,
document.getElementById('root'));
