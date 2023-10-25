import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BidderProductView from "./pages/BidderProductView";
import UserProductView from "./pages/UserProductView";
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Trending from './pages/Trending';
import ProfileView from './pages/ProfileView';
import Create from './components/forms/Create';
import Edit from './components/forms/Edit';
import Watchlist from './components/watchlist/Watchlist';
import { WatchlistProvider } from './components/watchlist/WatchlistContext';

function App() {
  return (
    <Router>
      <WatchlistProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' exact element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/trending_ads' element={<Trending/>} />
          {
            localStorage.getItem("token") ? (
             <>
                <Route path='/bidder_product' element={<BidderProductView />} />
                <Route path='/user_product' element={<UserProductView />} />
                <Route path='/profile' element={<ProfileView />} />
                <Route path='/create_post' element={<Create />} />
                <Route path='/edit_post' element={<Edit />} />
                <Route path='/watchlist' element={<Watchlist />} />
             </>
            ) : (
              <Route path='*' element={<Login />}> </Route>
            )
          }
        </Routes>
      </WatchlistProvider>
    </Router>
  );
}

export default App;