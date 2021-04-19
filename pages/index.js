import Head from 'next/head'

export default function Home() {
  return (
    <div className="login">
      <form method="POST" className="login-form">
        <label className="input">
          <input className="input__field" type="email" id="mail" name="mail" />
          <span className="input__label">Email:</span>
        </label>
        <label className="input">
          <input className="input__field" type="password" id="pwd" name="pwd" />
          <span className="input__label">Senha:</span>
        </label>
        <div className="button-group">
          <button>Enviar</button>
        </div>
      </form>
    </div>
  )
}
