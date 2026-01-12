import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (slug) => {
    navigate(`/category/${slug}`);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Brand */}
        <NavLink to="/" className="navbar-brand">
          🛒 PureFabric
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            {/* Category Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="categoryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </span>
              <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleCategoryClick("men")}
                  >
                    Men
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleCategoryClick("women")}
                  >
                    Women
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleCategoryClick("kids")}
                  >
                    Kids
                  </button>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/cart" className="nav-link cart-link">
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
