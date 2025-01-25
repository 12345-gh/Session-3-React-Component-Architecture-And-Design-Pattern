import React, { useRef, useImperativeHandle, forwardRef, FormEvent } from 'react';

interface InputProps {
  name: string;
  placeholder: string;
}

interface InputRef {
  focus: () => void;
  getValue: () => string;
}

const Input = forwardRef<InputRef, InputProps>(({ name, placeholder }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    getValue: () => {
      return inputRef.current ? inputRef.current.value : '';
    },
  }));

  return <input type="text" name={name} ref={inputRef} placeholder={placeholder} />;
});

const Uncontrolled3: React.FC = () => {
  const firstNameRef = useRef<InputRef>(null);
  const lastNameRef = useRef<InputRef>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstName = firstNameRef.current ? firstNameRef.current.getValue() : '';
    const lastName = lastNameRef.current ? lastNameRef.current.getValue() : '';

    console.log(`Uncontrolled3: `, { firstName, lastName });
  };

  console.log(`RERENDER Uncontrolled3`)

  return (
    <form onSubmit={handleSubmit}>
      <Input name="firstName" placeholder="First Name" ref={firstNameRef} />
      <Input name="lastName" placeholder="Last Name" ref={lastNameRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Uncontrolled3;