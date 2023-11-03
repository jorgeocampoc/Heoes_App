import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FormSerach } from "./Form";
import { UserContext } from "../../context/UserContext";

export const NavBar = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate(); //usado para la navegacion

  const handleForm = (data) => {
    return <Link to={`/searchHeroPAge/${data}`}></Link>;
  };

  const onLogout = () => {
    const band = confirm("Salir de la aplciacion?");
    band === true
      ? navigate("/login", {
          replace: true, //regresa al anterior historial, regresa a la anterior pagina
        })
      : console.log("No salio");
  };

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark pt-2">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand m-auto" to="marvel">
          Asociaciones
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="navbar-collapse">
                <div className="navbar-nav">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-item nav-link ${isActive ? "active" : ""} `
                    }
                    to="/marvel"
                  >
                    Marvel
                  </NavLink>

                  <NavLink
                    className={({ isActive }) =>
                      `nav-item nav-link ${isActive ? "active" : ""} `
                    }
                    to="/dc"
                  >
                    DC
                  </NavLink>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="  d-flex  justify-content-end justify-content-between-xs m-auto order-3 dual-collapse2 d-flex  justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info d-block">{user}</span>
            <button className="nav-item nav-link btn" onClick={onLogout}>
              Salir
            </button>
          </ul>
        </div>
        <FormSerach handleForm={handleForm} />
      </div>
    </nav>
  );
};
