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
  name: '',
  email: '',
  password: '',
  //Checkbox
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: true,
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

}

const postNewUser = () => {

}

const validate = (name, value) => {

}

// Event Handlers
const inputChange = (name, value) => {

}

const formSubmit = () => {

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
      <header><h1>Form Title</h1></header>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
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
