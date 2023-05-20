import React from 'react';
import './styles/styles.module.scss';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter/AppRouter';


function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
