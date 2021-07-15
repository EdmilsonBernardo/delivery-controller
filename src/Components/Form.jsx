import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DeliveryContext } from '../Context/DeliveryProvider';

const Form = () => {
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [statusOfDelivery, setStatusOfDelivery] = useState('');
  const [dateInput, setDateInput] = useState('');
  const { deliveries, setDeliveries } = useContext(DeliveryContext);
  const history = useHistory();

  const addDelivery = () => {
    const newDelivery = {
      title: titleInput,
      description: descriptionInput,
      deadline: dateInput,
      deliveryCompleted: statusOfDelivery,
    };
    setDeliveries([...deliveries, newDelivery ]);
    history.push('/delivery-list');
  };

  return (
    <form>
      <input
        type="text"
        value={ titleInput }
        onChange={ ({ target }) => setTitleInput(target.value) }
      />
      <input
        type="text"
        value={ descriptionInput }
        onChange={ ({ target }) => setDescriptionInput(target.value) }
      />
      <input
        type="date"
        value={ dateInput }
        onChange={ ({ target }) => setDateInput(target.value) }
      />
      <select onChange={ ({ target }) => setStatusOfDelivery(target.value) }>
        <option value="none" selected disabled hidden>
          Delivery completed?
        </option>
        <option value="yes">Yes</option>
        <option value="not">Not</option>
      </select>
      <button type="button" onClick={ addDelivery }>Add delivery</button>
    </form>
  );
}

export default Form;
