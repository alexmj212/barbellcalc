import './App.scss';
import Container from 'react-bootstrap/Container';

import { Nav, Navbar } from 'react-bootstrap';
import Barbell from './Barbell/Barbell';

function App() {
    return (
        <Container>
            <Navbar bg="light" expand="lg" className="my-3">
                <Navbar.Brand href="/">Barball Calc</Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link>Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Barbell></Barbell>
        </Container>
    );
}

export default App;
