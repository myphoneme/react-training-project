import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import { VscNoNewline } from "react-icons/vsc";

// style = {{backgroundColor:"black"}}

// "bg-dark text-white"

function Categories({ categories, handelCategoryId, toggle, textColor }) {
  return (
    <div>
      <div className="mb-4">
        <h6 className={textColor == "text-dark" ? "text-light" : "text-dark"}>
          Categories
        </h6>

        <ListGroup as="ul">
          {categories.map((category, index) => (
            <ListGroup.Item
              as="li"
              className={
                toggle == "light" ? "bg-white text-dark" : "bg-dark text-light"
              }
              key={category.id}
            >
              <button
                onClick={() => handelCategoryId(category.id)}
                style={{
                  background: "none",
                  border: "none",
                  textDecoration: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "color 0.3s ease",
                }}
                className={
                  textColor == "text-dark"
                    ? " text-black fw-semibold"
                    : " text-light "
                }
                onMouseEnter={(e) => (e.target.style.color = "gray")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                {category.category_name}
              </button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Categories;
