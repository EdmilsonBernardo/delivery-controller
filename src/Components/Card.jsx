import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DeliveryContext } from '../Context/DeliveryProvider';
import { MdCreate, MdDelete } from 'react-icons/md';

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
    <section className="card">
      <h2>{ delivery.title }</h2>
      <p>Description: { delivery.description }</p>
      <span>Deadline: { delivery.deadline }</span>
      <span>Delivery Completed: { delivery.deliveryCompleted }</span>
      <div className="buttons-container">
        <button
          type="button"
          onClick={ () => redirectEditPage(delivery.id) }
          className="btn-card"
        >
          Edit <MdCreate size="1.5em" />
        </button>
        <button
          type="button"
          onClick={ () => hundleClick(delivery.id) }
          className="btn-card"
        >
          delete <MdDelete size="1.5em" />
        </button>
      </div>
    </section>
  );
}

export default Card;
