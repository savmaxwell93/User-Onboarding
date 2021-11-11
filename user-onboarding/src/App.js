import React, { useState, useEffect } from 'react';
import schema from './validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import Form from './components/Form';
import User from './components/User'

// Initial States
const initialFormValues = {
  //Text Inputs
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  //Checkbox
  terms: false,
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: '',
}

const initialUsers = []
const initialDisabled = true


function App() {
// States
const [users, setUsers] = useState(initialUsers)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

// Helpers
const getUsers = () => {
  axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data.data);
    })
    .catch(err => console.error(err))
}

const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...users])
    })
    .catch(err => console.error(err))
    .finally(() => {
      setFormValues(initialFormValues)
    })
}

const validate = (name, value) => {
  yup.reach(schema, name).validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}

// Event Handlers
const inputChange = (name, value) => {
  validate(name,value);
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const formSubmit = () => {
  const newUser = {
    first_name: formValues.first_name.trim(),
    last_name: formValues.last_name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: ['terms']
  }
  postNewUser(newUser);
}

// Side Effects
useEffect(() => {
  getUsers()
}, [])

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div className='container'>
      <header><h1>Welcome Users!</h1></header>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <h2>Current Users</h2>
      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
