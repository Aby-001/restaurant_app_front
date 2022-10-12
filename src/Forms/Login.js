import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const userHandler = (value) => {
    setUser(value);
  }

  const passwordHandler = (value) => {
    setPassword(value);
  }

  const loginHandler = () => {
    if (user && password) {
      fetch("http://localhost:3000/login?q=" + user).then((data) => {
        data.json().then((resp) => {
          if (resp.length > 0) {
            navigate('/')
          }
          else {
            alert("Please check user name and password")
          }
        })
      })
    }
  }

  return (
    <div>

      <input type="text" name="user" value={user} onChange={(e) => userHandler(e.target.value)} placeholder="User Name" /> <br /><br />


      <input type="password" name="password" value={password} onChange={(e) => passwordHandler(e.target.value)} placeholder="Password" /> <br /><br />

      <button onClick={loginHandler}>Login</button>

    </div>
  )
}

export default Login