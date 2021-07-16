import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DeliveryContext } from '../Context/DeliveryProvider';

const Card = ({ delivery }) => {
  const { deliveries, setDeliveries } = useContext(DeliveryContext);
  const history = useHistory();
  const hundleClick = (id) => {
    const newState = deliveries.filter((delivery) => delivery.id !== id);
    setDeliveries(newState);
  }

  const redirectEditPage = (id) => {
    history.push(`/edit/${id}`);
  }

  return (
    <section>
      <h2>{ delivery.title }</h2>
      <p>{ delivery.description }</p>
      <span>Deadline: { delivery.deadline }</span>
      <span>Delivery Completed: { delivery.deliveryCompleted }</span>
      <button
        type="button"
        onClick={ () => redirectEditPage(delivery.id) }
      >
        Edit
      </button>
      <button
        type="button"
        onClick={ () => hundleClick(delivery.id) }
      >
        delete
      </button>
    </section>
  );
}

export default Card;
