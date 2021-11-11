import React, { useState } from 'react'
import Form from './Components/Form';
import axios from 'axios';
import schema from './Validation/formSchema'
import * as yup from 'yup';


const initialUserValues = {
  first_name: '',
  last_name: '',
  password: '',
  email: '',
  tos: false
}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  password: '',
  email: '',
}

export default function App() {
  const [userValues, setUserValues] = useState(initialUserValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);
  // Add all functions below
  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', userValues)
      .then(res => {
        setUsers([res.data, ...users]);
      })
      .catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
 
  const handleChange = (name, value) => {
    validate(name, value);
    setUserValues({...userValues, [name]: value})
  }

  return(
    <div className='App'>
      <Form 
      values={userValues} 
      change={handleChange} 
      errors={formErrors}
      submit={handleSubmit}
      />
      <br />
      <br />
      <br />
      {users.map(user => (
        <div key={user.id} className='submitted-text'>
          <p>New user added: {user.createdAt}</p>
          <p>Users Name: {user.first_name}, {user.last_name}</p>
        </div>
      ))}
    </div>
  )
}