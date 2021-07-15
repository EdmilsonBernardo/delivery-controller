import React from 'react';
import Card from './Card';
import EmptyList from './EmptyList';

const CardBoard = ({ deliveries }) => {
  if (deliveries && deliveries.length !== 0) {
    return (
      <section>
        { deliveries.map(( delivery, index ) => (<Card key={ index } delivery={ delivery } />)) }
      </section>
    );
  }
  return <EmptyList />
}

export default CardBoard;
