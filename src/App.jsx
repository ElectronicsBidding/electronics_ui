import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BidderProductView from "./pages/BidderProductView";
import UserProductView from "./pages/UserProductView";


import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Trending from './pages/Trending';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/trending_ads' element={<Trending/>} />
        <Route path='/bidder_product' element={<BidderProductView />} />
        <Route path='/user_product' element={<UserProductView />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;