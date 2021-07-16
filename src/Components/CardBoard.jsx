import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import EmptyList from './EmptyList';
import { MdAddCircle } from 'react-icons/md';
 
const CardBoard = ({ deliveries }) => {
  if (deliveries && deliveries.length !== 0) {
    return (
      <div className="board-container">
        <h2>Your deliveries</h2>
        <section className="card-board">
          <Link to="/record">
            <p className="add-del">Add new delivery</p>
            <button
              className="btn-register"
              type="button"
            >
              <MdAddCircle size="2em" color="#1C1427" />
            </button>
          </Link>
          { deliveries.map(( delivery, index ) => (<Card key={ index } delivery={ delivery } />)) }
        </section>
      </div>
    );
  }
  return <EmptyList />
}

export default CardBoard;
