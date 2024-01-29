import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function FormComponent() {
  const [valueFromChild, setValueFromChild] = useState('');

  const handleChildChange = (value) => {
    setValueFromChild(value);
  };

  return (
    <div>
      <h1>Value from child: {valueFromChild}</h1>
      <ChildComponent onChange={handleChildChange} />
    </div>
  );
}

export default FormComponent;