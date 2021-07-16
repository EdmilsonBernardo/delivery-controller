import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DeliveryContext } from '../Context/DeliveryProvider';
import { MdAddCircle } from 'react-icons/md';

const Form = () => {
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [statusOfDelivery, setStatusOfDelivery] = useState('');
  const [dateInput, setDateInput] = useState('');
  const { deliveries, setDeliveries } = useContext(DeliveryContext);
  const history = useHistory();

  const addDelivery = (event) => {
    event.preventDefault();
    const newDelivery = {
      id: deliveries.length + 1,
      title: titleInput,
      description: descriptionInput,
      deadline: dateInput,
      deliveryCompleted: statusOfDelivery,
    };
    setDeliveries([...deliveries, newDelivery ]);
    history.push('/delivery-list');
  };

  return (
    <form className="register-form" onSubmit={ addDelivery }>
      <h2>Register</h2>
      <input
        className="inputs"
        type="text"
        value={ titleInput }
        placeholder="Enter the title"
        onChange={ ({ target }) => setTitleInput(target.value) }
        minLength="1"
        required
      />
      <input
        className="inputs"
        type="text"
        value={ descriptionInput }
        placeholder="Enter the description"
        onChange={ ({ target }) => setDescriptionInput(target.value) }
        minLength="1"
        required
      />
      <input
        class="inputs"
        type="date"
        value={ dateInput }
        onChange={ ({ target }) => setDateInput(target.value) }
        required
      />
      <select className="inputs" onChange={ ({ target }) => setStatusOfDelivery(target.value) } name="selected" required>
        <option value="" selected disabled hidden>
          Delivery completed?
        </option>
        <option value="yes">Yes</option>
        <option value="not">Not</option>
      </select>
      <button
        className="btn-form"
        type="submit"
      >
        Add delivery <MdAddCircle size="1.5em"/>
      </button>
    </form>
  );
}

export default Form;
