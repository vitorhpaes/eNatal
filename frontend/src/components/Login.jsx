import React from "react";
import * as Fi from "react-icons/fi";

function Login() {
  return (
    <div className="hover">
      <input type="password" placeholder="Senha de acesso" id="login-input" />
      <div id="login-btn"><Fi.FiLogIn/> Login</div>
    </div>
  );
}

export default Login;
