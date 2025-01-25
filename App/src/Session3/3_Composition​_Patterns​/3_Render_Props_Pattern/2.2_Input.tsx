/*
  Children as a function
*/

import React, { useState } from "react";

interface Input2Props {
  children: (value: string) => React.ReactNode;
}

export const Input2: React.FC<Input2Props> = (props) => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.children(value)}
    </>
  );
};

interface TemperatureProps {
  value: string;
}

export const Kelvin2: React.FC<TemperatureProps> = ({ value }) => {
  const kelvin = parseFloat(value) + 273.15;
  return <div className="temp">{isNaN(kelvin) ? "" : kelvin.toFixed(2)}K</div>;
};

export const Fahrenheit2: React.FC<TemperatureProps> = ({ value }) => {
  const fahrenheit = (parseFloat(value) * 9) / 5 + 32;
  return <div className="temp">{isNaN(fahrenheit) ? "" : fahrenheit.toFixed(2)}°F</div>;
};

