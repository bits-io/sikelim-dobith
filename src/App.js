import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Nav, NavDropdown } from 'react-bootstrap';

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import EditProduct from "./components/categories/edit.component";
import ProductList from "./components/categories/list.component";
import CreateProduct from "./components/categories/create.component";
import ListDataOperasional from "./components/data_operasional/list_data_operasional.component";

function App() {
  
  return (<Router>
    <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://img.icons8.com/color-glass/48/000000/accounting.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Sikelim
          </Navbar.Brand>
          <NavDropdown title="U" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Admin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Keluar</NavDropdown.Item>
            </NavDropdown>
        </Container>
        
      </Navbar>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Data Akun</Nav.Link>
            <NavDropdown title="Transaksi" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Laporan" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className="mt-3 mb-3 justify-content-center">
      <Button variant="outline-primary">Laba dan Rugi</Button>{' '}
      <Button variant="outline-primary">Perubahan Modal</Button>{' '}
      <Button variant="outline-primary">Arus Kas</Button>{' '}
      <Button variant="outline-primary">Data Pembelian</Button>{' '}
      <Button variant="outline-primary">Data Penjualan</Button>{' '}
      <Link className='btn btn-primary' to={"/data_operasional"}>
        Data Operasional
      </Link>
    </Container>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/data_operasional" element={<ListDataOperasional />} />
            <Route path="/categories/create" element={<CreateProduct />} />
            <Route path="/categories/edit/:id" element={<EditProduct />} />
            <Route exact path='/' element={<ProductList />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

export default App;