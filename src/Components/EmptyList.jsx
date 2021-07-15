import React from 'react';
import { Link } from 'react-router-dom';

const EmptyList = () => {
  return (
    <section className="empty-page">
      <h3>You haven't added any deliveries here yet... Is everything ok?</h3>
      <Link to="/record">
        <button>Go to registration page</button>
      </Link>
    </section>
  );
}

export default EmptyList;
