import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DummyWeatherImage from "../assets/thunderstorm.png";
import Button from "react-bootstrap/Button";
import { BiRightArrowAlt } from "react-icons/bi";
import Stack from "react-bootstrap/Stack";

const LocalHighlight = () => {
  return (
    <Container>
      {/* time,date, current location */}
      <Stack direction="horizontal" className="">
        <p className="fw-medium fs-4">Lagos Nigeria</p>
        <Button variant="primary" className="ms-auto rounded-pill" size="sm">
          Around your country <BiRightArrowAlt />
        </Button>
      </Stack>
      <small className="text-body-secondary">7:50 pm WAT 12th August</small>
      <Row>
        <Col md={4} xs={6} sm={6}>
          {/* current temperature  */}
          <div className="fw-bold " style={{ fontSize: "3.5rem" }}>
            {" "}
            10 &deg;
          </div>
          {/* weather statement */}
          <div className="text-body-secondary ">Thunderstorm</div>
        </Col>
        <Col md={4} xs={6} sm={6}>
          {/* current temperature img */}
          <img
            src={DummyWeatherImage}
            alt="weather condition"
            width={"120px"}
            height={"120px"}
            className="weather-img"
          />
        </Col>
        <Col className="text-body-secondary fs-6 text-md-center my-5 my-md-0">
          {/* chat gpt comment */}
          {/* <h3 className="fs-6">GPT comment</h3>
          <p>
            Mild and humid day. Wear light clothing, low UV; stay hydrated.
            Enjoy outdoor activities.
          </p> */}
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Tip</Card.Title>
              <Card.Text>
                Mild and humid day. Wear light clothing, low UV; stay hydrated.
                Enjoy outdoor activities.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LocalHighlight;
