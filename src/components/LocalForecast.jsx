import { useState } from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const LocalForecast = () => {
  const [key, setKey] = useState("today");
  return (
    <Container>
      <header>
        {/* local location , Forecast */}
        Lagos Nigeria, Forecast
      </header>

      <Tabs
        id="local-forecast"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        justify
      >
        <Tab eventKey="today" title="Today">
          {" "}
          Tab content from today
        </Tab>
        <Tab eventKey="hourly" title="Hourly">
          {" "}
          Tab content from hourly
        </Tab>
        <Tab eventKey="daily" title="Daily">
          {" "}
        </Tab>
        <Tab eventKey="more" title="More Forecasts">
          {" "}
          Tab content from daily
        </Tab>
      </Tabs>
    </Container>
  );
};

export default LocalForecast;
