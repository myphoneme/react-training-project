import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function AdminSidebar() {
  return (
    <div
      className="bg-dark ms-0 ps-0"
      style={{ width: "200px", minHeight: "560px", height: "auto" }}

    >
      <Nav className="flex-column p-3">
        <Nav.Item>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/categorylist"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Category
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/postlist"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Post
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/userlist"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            User
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Settings
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default AdminSidebar;
