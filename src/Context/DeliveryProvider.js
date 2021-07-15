import React, { useState, createContext } from 'react';

const DeliveryContext = createContext();

function DeliveryProvider({ children }) {
  const [deliveries, setDeliveries] = useState([{
      title: 'delivery 1',
      description: 'description 1',
      deadline: '15/07/2021',
      deliveryCompleted: false,
  }, {
    title: 'delivery 2',
    description: 'description 2',
    deadline: '15/07/2021',
    deliveryCompleted: true,
  }]);

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
