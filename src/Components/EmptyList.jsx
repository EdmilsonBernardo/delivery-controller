import React from 'react';
import { Link } from 'react-router-dom';
import { MdReportProblem } from 'react-icons/md';

const EmptyList = () => {
  return (
    <section className="empty-page">
      <MdReportProblem size="3em" />
      <h3>You haven't added any deliveries here yet... Is everything ok?</h3>
      <Link to="/record">
        <button className="btn-empty-page">Add delivery</button>
      </Link>
    </section>
  );
}

export default EmptyList;
