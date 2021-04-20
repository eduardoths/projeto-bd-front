import Head from 'next/head'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remind, setRemind] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(
      "https://pcs3623-mytrello-api.herokuapp.com/login/",
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
    })})
    .then(response =>  {
      response.json().then(data => {
        Cookies.set("user", data["token"], {sameSite: 'lax'})
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    event.preventDefault()
  }
  const handlePwdChange = (event) => {
    setPassword(event.target.value)
    event.preventDefault()
  }
  const handleRemindChange = event => {
    console.log(document.getElementById('remind').checked)
  }
  return (
    <div className="login" onSubmit={handleSubmit}>
      <form method="POST" className="login-form">
        <label className="input">
          <input className="input__field" type="email" id="mail" name="mail" value={email} onChange={handleEmailChange}/>
          <span className="input__label">Email:</span>
        </label>
        <label className="input">
          <input className="input__field" type="password" id="pwd" name="pwd" value={password} onChange={handlePwdChange} />
          <span className="input__label">Senha:</span>
        </label>
        <label>
          Lembre-se de mim
          <input type="checkbox" id="remind" onClick={handleRemindChange}/> 
        </label>
        <div className="button-group">
          <button>Enviar</button>
        </div>
      </form>
    </div>
  )
}
