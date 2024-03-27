import React, { useEffect, useState } from 'react';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import "./App.scss";
import RoutersConfig from './Routers/RoutersConfig';
function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <RoutersConfig />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
