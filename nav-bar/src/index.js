import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ItemListContainer, Navbar } from "./components/navBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <ItemListContainer greetings='Ariel'/>
  </React.StrictMode>
);




