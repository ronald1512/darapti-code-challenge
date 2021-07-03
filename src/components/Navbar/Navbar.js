import React from 'react';
import { Link, NavLink } from 'react-router-dom'; /*uso Link y Navlink porque principalmente me deja cambiar de componente sin recargar la pagina */

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                Darapti
                </Link>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <NavLink
                            
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/task1"
                        >
                            Tarea1
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            to="/task2"
                        >
                            Tarea2
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            to="/task3"
                        >
                            Tarea3
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>

    )
}
