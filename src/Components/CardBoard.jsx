import React from 'react';
import Card from './Card';

const CardBoard = ({ deliveries }) => {
  return (
    <section>
      { deliveries.map(( delivery, index ) => (<Card key={ index }delivery={ delivery } />)) }
    </section>
  );
}

export default CardBoard;
