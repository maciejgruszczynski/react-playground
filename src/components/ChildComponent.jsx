import React, { useState } from 'react';

function ChildComponent({ onChange }) {
  const [localValue, setLocalValue] = useState('');

  const handleLocalChange = (event) => {
    setLocalValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <input type="text" value={localValue} onChange={handleLocalChange} />
  );
}

export default ChildComponent;