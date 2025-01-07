import React from "react";
import { Row, Col, Card, Button, Pagination } from "react-bootstrap";

function Paginate(totalPages, paginate, currentPage) {
  return (
    <div className="d-flex justify-content-center">
      <Pagination>
        <Pagination.Prev
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
}

export default Paginate;
