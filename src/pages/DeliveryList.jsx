import React, { useContext } from 'react'
import { DeliveryContext } from '../Context/DeliveryProvider';

const DeliveryList = () => {
  const { deliveries } = useContext(DeliveryContext);
  return (
    <div>
      <p>{ deliveries }</p>
    </div>
  )
}

export default DeliveryList;
