import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState([]);
  const addRestaurant = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };
  return (
    // the context provider needs to hold the value of restaurants from the api
    // setRestaurants is a function that updates the state with the restaurant response data
    <Context.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurant,
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
// don't forget to wrap the App component in the context so that it can consume the context values

// // use createContext to initialize context for use in application

// export default React.createContext({
//   // empty update functions
// });
