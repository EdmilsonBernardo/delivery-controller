import React, { useContext } from 'react';
import CardBoard from '../Components/CardBoard';
import { DeliveryContext } from '../Context/DeliveryProvider';

const DeliveryList = () => {
  const { deliveries } = useContext(DeliveryContext);
  return (
    <CardBoard deliveries={ deliveries } />
  );
}

export default DeliveryList;
