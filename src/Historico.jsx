import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "./assets/Logout.svg";

export default function Historico() {
  const navigate = useNavigate();

  const cardData = [
    { id: 1, title: "URL da imagem" },
    { id: 2, title: "Parte" },
    { id: 3, title: "Condição" },
    { id: 4, title: "Detalhe" },
    { id: 5, title: "Aprovado" },
  ];

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img
              src="../src/assets/Logo.svg"
              alt="Sabará Hospital Infantil"
              className="me-2"
              style={{ width: "164px", height: "90px", objectFit: "contain" }}
            />
          </a>

          <div className="mx-auto">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold active" href="#">
                  Histórico
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Análise
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-light d-flex align-items-center"
              onClick={handleLogout}
              title="Logout"
            >
              <img
                src={LogoutIcon}
                alt="Logout"
                style={{ width: "24px", height: "24px" }}
              />
              <span className="ms-2">Sair</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow-1 container py-4">
        <div className="row justify-content-center g-4 mb-3">
          {cardData.slice(0, 3).map(({ id, title }) => (
            <div key={id} className="col-12 col-md-4 d-flex">
              <div className="card w-100 shadow-sm flex-fill">
                <div className="card-header bg-success text-white fw-semibold text-center">
                  {title}
                </div>
                <div className="card-body" style={{ minHeight: "160px" }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center g-4">
          {cardData.slice(3).map(({ id, title }) => (
            <div key={id} className="col-12 col-md-4 d-flex">
              <div className="card w-100 shadow-sm flex-fill">
                <div className="card-header bg-success text-white fw-semibold text-center">
                  {title}
                </div>
                <div className="card-body" style={{ minHeight: "160px" }}></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}