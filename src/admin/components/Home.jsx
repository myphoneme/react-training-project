import { useState } from "react";

import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import { Container, Row, Col } from "react-bootstrap";

function Layout() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AdminHeader />
      <Row>
        <Col md={2}>
          <AdminSidebar />
        </Col>
        <Col md={9}>
          <AdminDashboard />
        </Col>
      </Row>
      <AdminFooter />
    </div>
  );
}

export default Layout;
