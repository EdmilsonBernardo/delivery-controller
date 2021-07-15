import React, { useState, createContext } from 'react';

const DeliveryContext = createContext();

function DeliveryProvider({ children }) {
  const [deliveries, setDeliveries] = useState([]);

  const contextValue = {
    deliveries,
    setDeliveries,
  };

  return (
    <DeliveryContext.Provider value={ contextValue }>
      {children}
    </DeliveryContext.Provider>
  );
}

export { DeliveryProvider, DeliveryContext };
