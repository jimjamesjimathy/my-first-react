import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then(res => {
        setUsers(res.data.results);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
