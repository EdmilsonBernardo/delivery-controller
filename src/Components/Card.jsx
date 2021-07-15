import React from 'react';

const Card = ({ delivery }) => {
  return (
    <section>
      <h2>{ delivery.title }</h2>
      <p>{ delivery.description }</p>
      <span>Deadline: { delivery.deadline }</span>
      <span>Delivery Completed: { delivery.deliveryCompleted }</span>
    </section>
  );
}

export default Card;
