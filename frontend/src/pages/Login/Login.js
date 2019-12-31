import React from "react";
import "./Login.css";

import logo from "../../assets/logo.svg";

export default function Login({ history }) {
  function handleSubmit(e) {
    e.preventDefault();
    history.push("/main");
  }

  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="Tindev" />
        <input type="text" placeholder="Digite seu usuário no Github" />
        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
}
