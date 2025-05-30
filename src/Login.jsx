import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    navigate("/historico"); 
  }

  function handleCadastro() {
    navigate("/cadastro"); 
  }

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
      <img src="../src/assets/Logo.svg" className="logo-gui" alt="Logo" />

      <div className="login-box-gui bg-secondary-subtle rounded p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="CRM"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-outline-primary w-50 me-2"
              onClick={handleCadastro}
            >
              Cadastre-se
            </button>
            <button type="submit" className="btn btn-primary w-50">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}