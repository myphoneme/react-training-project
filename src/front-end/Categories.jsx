import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { globalContext } from "./Context";

function Categories({ categories, handelCategoryId, toggle, textColor }) {
  const { mode, setMode } = useContext(globalContext);
  return (
    <div>
      <div className="mb-4">
        <h6 className={mode ? "text-dark" : "text-light"}>Categories</h6>

        <ListGroup as="ul">
          {categories.map((category, index) => (
            <ListGroup.Item
              as="li"
              className={mode ? "bg-dark text-light" : "bg-white text-dark"}
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
                className={mode ? " text-light " : " text-black fw-semibold"}
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
