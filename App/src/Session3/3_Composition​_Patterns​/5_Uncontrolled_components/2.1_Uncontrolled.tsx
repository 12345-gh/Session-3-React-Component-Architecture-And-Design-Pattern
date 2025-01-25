/*
  Uncontrolled components are like regular HTML form inputs for which you will not be able to
  manage the value yourself but instead, the DOM will take care of handling the value and you can
  get this value by using a React ref. 
*/

import React, { useRef, FormEvent } from 'react';

const Uncontrolled2: React.FC = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstName = firstNameRef.current ? firstNameRef.current.value : '';
    const lastName = lastNameRef.current ? lastNameRef.current.value : '';

    console.log(`Uncontrolled2: `, { firstName, lastName });
  };

  console.log(`RERENDER Uncontrolled2`)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        ref={firstNameRef}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        ref={lastNameRef}
        placeholder="Last Name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Uncontrolled2;