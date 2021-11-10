import React, { useState, useEffect } from 'react';
import schema from './validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Form Title</h1>
      <Form />
    </div>
  );
}

export default App;
