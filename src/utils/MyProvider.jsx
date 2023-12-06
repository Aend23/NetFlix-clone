import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState(null);

  const updateSharedState = (newState) => {
    setSharedState(newState);
  };

  return (
    <MyContext.Provider value={{ sharedState, updateSharedState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
