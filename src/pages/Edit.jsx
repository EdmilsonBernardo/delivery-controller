import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DeliveryContext } from '../Context/DeliveryProvider';
import { MdCheckCircle } from 'react-icons/md';

const Edit = () => {
  const { id } = useParams();
  const { deliveries, setDeliveries } = useContext(DeliveryContext);
  const [forms, setForms] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const deliverySelected = deliveries.find((delivery) => delivery.id === +id);
    const obj = {
      id: +id,
      title: deliverySelected.title,
      description: deliverySelected.description,
      deadline: deliverySelected.deadline,
      deliveryCompleted: deliverySelected.deliveryCompleted,
    }
    setForms(obj);
  },[]);

  const saveDelivery = () => {
    const newList = deliveries.map((delivery) => delivery.id === +id ? forms : delivery);
    setDeliveries(newList);
    history.push("/delivery-list")
  }

  if (forms) return (
    <form className="edit-form">
      <h2>Edit</h2>
      <input
        className="inputs"
        type="text"
        name="title"
        value={forms.title}
        onChange={({target}) => setForms({ ...forms, [target.name]: target.value})}
      />
      <input
        className="inputs"
        type="text"
        name="description"
        value={forms.description}
        onChange={({target}) => setForms({ ...forms, [target.name]: target.value })}
      />
      <input
        className="inputs"
        type="date"
        name="deadline"
        value={forms.deadline}
        onChange={({target}) => setForms({ ...forms, [target.name]: target.value})}
      />
      <select
        name="deliveryCompleted"
        className="inputs"
        value={forms.deliveryCompleted}
        onChange={({target}) => setForms({ ...forms, [target.name]: target.value})}

      >
        <option value="none" selected disabled hidden>
          Delivery completed?
        </option>
        <option value="yes">Yes</option>
        <option value="not">Not</option>
      </select>
      <button
        className="btn-form"
        type="button"
        onClick={ saveDelivery }
      >
        Save <MdCheckCircle size="1.5em"/>
      </button>
    </form>
  );
  return (<p>Loading</p>);
}

export default Edit;
