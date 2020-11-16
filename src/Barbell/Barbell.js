import React, { Component } from 'react'
import { Button, ButtonGroup, Col, Container, Form, InputGroup } from 'react-bootstrap'

export default class Barbell extends Component {
    render() {
        return (
            <Container>
                <h1>Barbell</h1>
                <Form>
                    <Form.Group as="Row" controlId="unitControl">
                        <Form.Row className="mb-2">
                            <Form.Label column lg={2}>Weight Unit</Form.Label>
                            <Col>
                                <ButtonGroup aria-label="units">
                                    <Button variant="outline-primary">Metric</Button>
                                    <Button variant="outline-primary active">Imperial</Button>
                                </ButtonGroup>
                            </Col>
                        </Form.Row>
                        <Form.Row className="mb-2">
                            <Form.Label column lg={2}>Bar Weight</Form.Label>
                            <Col lg={4}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <Button variant="outline-primary active">45 lbs.</Button>
                                        <Button variant="outline-primary">35 lbs.</Button>
                                    </InputGroup.Prepend>
                                    <Form.Control className="md-2" placeholder="Custom"></Form.Control>
                                    <InputGroup.Append>
                                        <InputGroup.Text>lbs.</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Row>
                        <Form.Row className="mb-2">
                            <Form.Label column lg={2}>Add Weight</Form.Label>
                            <Col lg={4}>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <Button variant="outline-primary">+</Button>
                                        <Button variant="outline-primary">-</Button>
                                    </InputGroup.Prepend>
                                    <InputGroup.Text variant="primary">45 lbs.</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <Button variant="outline-primary">+</Button>
                                        <Button variant="outline-primary">-</Button>
                                    </InputGroup.Prepend>
                                    <InputGroup.Text variant="primary">25 lbs.</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <Button variant="outline-primary">+</Button>
                                        <Button variant="outline-primary">-</Button>
                                    </InputGroup.Prepend>
                                    <InputGroup.Text variant="primary">15 lbs.</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <Button variant="outline-primary">+</Button>
                                        <Button variant="outline-primary">-</Button>
                                    </InputGroup.Prepend>
                                    <InputGroup.Text variant="primary">10 lbs.</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <Button variant="outline-primary">+</Button>
                                        <Button variant="outline-primary">-</Button>
                                    </InputGroup.Prepend>
                                    <InputGroup.Text variant="primary">5 lbs.</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <Button variant="outline-primary">+</Button>
                                        <Button variant="outline-primary">-</Button>
                                    </InputGroup.Prepend>
                                    <Form.Control className="md-2" placeholder="Custom"></Form.Control>
                                    <InputGroup.Append>
                                        <InputGroup.Text variant="primary">lbs.</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}
