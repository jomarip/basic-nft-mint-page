import React from 'react';
import { TopNav, Footer } from './components';
import Home from './pages/Home';
import MyWallet from './pages/MyWallet';
import Workshop from './pages/Workshop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/mywallet' exact element={<MyWallet />} />
          <Route path='/workshop' exact element={<Workshop />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
