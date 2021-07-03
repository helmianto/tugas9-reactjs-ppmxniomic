import React from 'react';
import { Container, Row, Col, Nav, Table, ProgressBar, Pagination, OverlayTrigger, Button } from 'react-bootstrap';
import TooltipComp from './TooltipComp';
import PopoverComp from './PopoverComp';

const TableContent = () => {
    return(
        <div className="mb-5">
            <Container>
                {/* Nav */}
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                    <h4 className="mb-3">Rumor Transfer Pemain</h4>
                    <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Semua Trasnfer</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Liga Premier Inggris</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Serie A</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Divisi Primera</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Bundesliga</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Liga 1 Indonesia</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col md={1}></Col>
                </Row>
                {/* Table */}
                <Row className="mt-2">
                    <Col md={1}></Col>
                    <Col md={10}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th width="5%">#</th>
                                    <th width="30%">Nama Pemain</th>
                                    <th width="20%">Tim</th>
                                    <th width="20%">Transfer</th>
                                    <th width="25%">Proses Transfer</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Bruno Fernandes</td>
                                    <td>MU</td>
                                    <td>Persija Jakarta</td>
                                    <td><ProgressBar animated  now={80} label={'80%'} /></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>David De Gea</td>
                                    <td>MU</td>
                                    <td>Persija Jakarta</td>
                                    <td><ProgressBar animated  now={80} label={'80%'} /></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Luke Shaw</td>
                                    <td>MU</td>
                                    <td>Persija Jakarta</td>
                                    <td><ProgressBar animated  now={80} label={'80%'} /></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Edinson Cavani</td>
                                    <td>MU</td>
                                    <td>Persija Jakarta</td>
                                    <td><ProgressBar animated  now={80} label={'80%'} /></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Atta Halilingard</td>
                                    <td>MU</td>
                                    <td>AHHA Pati</td>
                                    <td><ProgressBar animated  now={100} label={'100%'} /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={1}></Col>
                </Row>
                <Row className="mt-2">
                    <Col md={1}></Col>
                    <Col md={11}>
                        <Pagination size="sm">
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item disabled>{14}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col md={1}></Col>
                    <Col md={1} className="mr-1">
                        <PopoverComp />
                    </Col>
                    <Col md={1}>
                        <TooltipComp />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TableContent;