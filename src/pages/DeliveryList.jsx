import React, { useContext } from 'react';
import CardBoard from '../Components/CardBoard';
import { DeliveryContext } from '../Context/DeliveryProvider';

const DeliveryList = () => {
  const { deliveries } = useContext(DeliveryContext);
  return (
    <div>
      <CardBoard deliveries={ deliveries }/> 
    </div>
  );
}

export default DeliveryList;
