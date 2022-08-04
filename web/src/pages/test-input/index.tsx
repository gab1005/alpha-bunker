import React, { useState } from 'react';

export const TestInput = () => {
  const [value, setValue] = useState('');

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    // const lastLetter: EventListenerOrEventListenerObject = e.nativeEvent.data;
    // console.log(value + lastLetter);
    console.log(value + e.target.defaultValue);
    console.log('');
    console.log(e);
    console.log(e.target);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={value}
        onChange={(e) => handleValue(e)}
      />
      <p> {value} </p>
    </div>
  );
};
