import React from 'react';
import { Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

class HeaderContent extends React.Component {
    render(){
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#">Akses Sport</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Berita</Nav.Link>
                            <Nav.Link href="#action2">Live Score</Nav.Link>
                            <NavDropdown title="Piala & Liga" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action2">Transfer Pemain</Nav.Link>
                            <Nav.Link href="#action2">Tim</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <Row>
                        <Col md={1} ></Col>
                        <Col md={6} ></Col>
                        <Col md={4} className="text-right">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                Library
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Data</Breadcrumb.Item>
                        </Breadcrumb>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HeaderContent;