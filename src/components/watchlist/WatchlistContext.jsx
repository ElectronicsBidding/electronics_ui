import React, { createContext, useReducer, useContext } from "react";

// Initial state for the watchlist
const initialWatchlist = [];

// Watchlist reducer
const watchlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return [...state, action.product];
    case "REMOVE_FROM_WATCHLIST":
      return state.filter((item) => item.id !== action.productId);
    default:
      return state;
  }
};


const WatchlistContext = createContext();

// Custom hook to access the watchlist context
export const useWatchlist = () => {
  return useContext(WatchlistContext);
};

export const WatchlistProvider = ({ children }) => {
  const [watchlist, dispatch] = useReducer(watchlistReducer, initialWatchlist);

  return (
    <WatchlistContext.Provider value={{ watchlist, dispatch }}>
      {children}
    </WatchlistContext.Provider>
  );
};
