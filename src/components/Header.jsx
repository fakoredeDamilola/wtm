import { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { BsSearch } from "react-icons/bs";
import { geoFindUser, getCurrentWeatherData, getWeatherRadar } from "../admin";

const Header = () => {
  useEffect(() => {
    geoFindUser();
    getCurrentWeatherData();
    getWeatherRadar();
  }, []);
  return (
    <header>
      <Navbar expand="md" data-bs-theme="" variant="">
        <Container>
          <Navbar.Brand href="#">Weathman</Navbar.Brand>
          <Form className="mx-auto">
            <InputGroup>
              <Form.Control
                aria-label="Search a place"
                aria-describedby="search-location"
                placeholder="search anyplace ..."
              ></Form.Control>
              <Button variant="outline-secondary" id="search-location">
                <BsSearch />
              </Button>
            </InputGroup>
          </Form>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav" className="flex-grow-0">
            <Nav>
              <Nav.Link href="dummy">hourly forecast</Nav.Link>
              <Nav.Link href="dummy">daily forecast</Nav.Link>
              <Nav.Link href="dummy">weekly forecast</Nav.Link>
              <Nav.Link href="dummy">monthly forecast</Nav.Link>
              <Nav.Link href="dummy">Maps</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
