/*
  Function As Child
*/

import React, { useState } from "react";

interface InputProps {
  render: (value: string) => React.ReactNode;
}

export const Input: React.FC<InputProps> = (props) => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.render(value)}
    </>
  );
};

interface TemperatureProps {
  value: string;
}

export const Kelvin: React.FC<TemperatureProps> = ({ value }) => {
  const kelvin = parseFloat(value) + 273.15;
  return <div>Kelvin: {isNaN(kelvin) ? "" : kelvin.toFixed(2)}</div>;
};

export const Fahrenheit: React.FC<TemperatureProps> = ({ value }) => {
  const fahrenheit = (parseFloat(value) * 9) / 5 + 32;
  return <div>Fahrenheit: {isNaN(fahrenheit) ? "" : fahrenheit.toFixed(2)}</div>;
};