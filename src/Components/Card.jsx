import React from 'react';

const Card = ({ title, description, deadline, deliveryCompleted }) => {
  return (
    <section>
      <h2>{ title }</h2>
      <p>{ description }</p>
      <span>Deadline: { deadline }</span>
      <span>Delivery Completed: { deliveryCompleted }</span>
    </section>
  );
}

export default Card;
