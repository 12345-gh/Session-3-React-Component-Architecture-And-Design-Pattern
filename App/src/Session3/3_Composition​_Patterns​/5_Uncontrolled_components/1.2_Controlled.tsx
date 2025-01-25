import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Values {
  firstName: string;
  lastName: string;
}

const Controlled: React.FC = () => {
  const [values, setValues] = useState<Values>({ firstName: '', lastName: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Controlled: `, values);
  };

  console.log(`RERENDER Controlled`)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Controlled;