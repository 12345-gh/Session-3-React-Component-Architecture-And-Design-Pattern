/*
  Uncontrolled components are like regular HTML form inputs for which you will not be able to
manage the value yourself but instead, the DOM will take care of handling the value and you can
get this value by using a React ref. 
*/

import { ChangeEvent, FormEvent, useState } from 'react'

interface Values {
  firstName: string;
  lastName: string;
}

const Uncontrolled = () => {
  const [values, setValues] = useState<Values>({ firstName: '', lastName: '' })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(`Uncontrolled: `, values)
  }

  console.log(`RERENDER Uncontrolled`)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default Uncontrolled